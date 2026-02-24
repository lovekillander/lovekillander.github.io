/**
 * Generates favicon.ico and favicon.png with the ✦ (four-pointed star) design.
 * Black background, white star — matches favicon.svg exactly.
 * Run: node scripts/make-favicon.cjs
 */

const zlib = require('zlib');
const fs   = require('fs');
const path = require('path');

// ─── PNG encoder (pure Node built-ins) ───────────────────────────────────────

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++)
      crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const t = Buffer.from(type, 'ascii');
  const d = Buffer.isBuffer(data) ? data : Buffer.from(data);
  const lenBuf = Buffer.allocUnsafe(4);
  lenBuf.writeUInt32BE(d.length, 0);
  const crcBuf = Buffer.allocUnsafe(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([t, d])), 0);
  return Buffer.concat([lenBuf, t, d, crcBuf]);
}

function makePNG(size, drawFn) {
  // Create RGBA pixel buffer
  const buf = Buffer.alloc(size * size * 4, 0); // black transparent

  const setPixel = (x, y, r, g, b, a = 255) => {
    if (x < 0 || x >= size || y < 0 || y >= size) return;
    const i = (y * size + x) * 4;
    buf[i]     = r;
    buf[i + 1] = g;
    buf[i + 2] = b;
    buf[i + 3] = a;
  };

  drawFn(size, buf, setPixel);

  // Build raw rows with filter byte 0
  const rows = [];
  for (let y = 0; y < size; y++) {
    const row = Buffer.allocUnsafe(1 + size * 4);
    row[0] = 0; // None filter
    for (let x = 0; x < size; x++) {
      const si = (y * size + x) * 4;
      row[1 + x * 4]     = buf[si];
      row[1 + x * 4 + 1] = buf[si + 1];
      row[1 + x * 4 + 2] = buf[si + 2];
      row[1 + x * 4 + 3] = buf[si + 3];
    }
    rows.push(row);
  }

  const ihdr = Buffer.allocUnsafe(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8]  = 8; // bit depth
  ihdr[9]  = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const sig  = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const idat = zlib.deflateSync(Buffer.concat(rows), { level: 9 });

  return Buffer.concat([
    sig,
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', idat),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

// ─── Point-in-polygon (ray casting) ──────────────────────────────────────────

function pointInPolygon(px, py, poly) {
  let inside = false;
  const n = poly.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = poly[i][0], yi = poly[i][1];
    const xj = poly[j][0], yj = poly[j][1];
    if (((yi > py) !== (yj > py)) &&
        (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
}

// ─── Draw ✦ four-pointed star ─────────────────────────────────────────────────
//  Outer points at 0°/90°/180°/270° (outerR from center)
//  Inner corners at 45°/135°/225°/315° (innerR from center)

function drawStar(size, _buf, setPixel) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.44;  // tip radius (~94% of half-size)
  const innerR = size * 0.095; // valley radius (narrow waist)

  // Build polygon vertices (8 points, starting from top)
  const angles = [];
  for (let i = 0; i < 8; i++) {
    angles.push(-Math.PI / 2 + i * (Math.PI / 4));
  }
  const poly = angles.map((a, i) => {
    const r = i % 2 === 0 ? outerR : innerR;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });

  // Rasterise — also do 2×2 super-sampling for simple AA
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Background: black, fully opaque
      const bi = (y * size + x) * 4;
      _buf[bi + 3] = 255; // alpha = opaque

      // Sample 4 sub-pixels
      let hits = 0;
      const offsets = [[0.25, 0.25],[0.75, 0.25],[0.25, 0.75],[0.75, 0.75]];
      for (const [ox, oy] of offsets) {
        if (pointInPolygon(x + ox, y + oy, poly)) hits++;
      }
      if (hits > 0) {
        const v = Math.round((hits / 4) * 255);
        setPixel(x, y, v, v, v, 255);
      }
    }
  }
}

// ─── Build ICO container ──────────────────────────────────────────────────────
// ICO with a single 256×256 PNG image embedded

function makeICO(pngData) {
  const HEADER_SIZE   = 6;
  const DIRENTRY_SIZE = 16;
  const imageOffset   = HEADER_SIZE + DIRENTRY_SIZE;

  const header = Buffer.allocUnsafe(HEADER_SIZE);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: ICO
  header.writeUInt16LE(1, 4); // count: 1 image

  const dir = Buffer.allocUnsafe(DIRENTRY_SIZE);
  dir[0] = 0;   // width  0 = 256
  dir[1] = 0;   // height 0 = 256
  dir[2] = 0;   // palette colours
  dir[3] = 0;   // reserved
  dir.writeUInt16LE(1, 4);               // colour planes
  dir.writeUInt16LE(32, 6);             // bits per pixel
  dir.writeUInt32LE(pngData.length, 8); // size of image data
  dir.writeUInt32LE(imageOffset, 12);   // offset to image data

  return Buffer.concat([header, dir, pngData]);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const publicDir = path.join(__dirname, '..', 'public');

// 256×256 PNG (for ICO and standalone)
const png256 = makePNG(256, drawStar);
const ico    = makeICO(png256);

// 64×64 PNG for <link rel="icon" type="image/png">
const png64  = makePNG(64, drawStar);

fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);
fs.writeFileSync(path.join(publicDir, 'favicon.png'), png64);

console.log('✓ favicon.ico  (256×256 PNG in ICO container)');
console.log('✓ favicon.png  (64×64 PNG)');
