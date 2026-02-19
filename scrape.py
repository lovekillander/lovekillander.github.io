def main():
    brand_links = find_brand_links()
    print(f"Hittade {len(brand_links)} varumärken (exkl. Yogiraj).")
    rows = []
    for bl in brand_links:
        prod_urls = paginate_brand(bl)   # <-- DEN HÄR RADDEN BEHÖVS
        for p in prod_urls:
            info = parse_product(p)
            if EXCLUDE_PATTERN.search(info.get("brand","")):
                continue
            rows.append(info)

    with open("produkter_exkl_yogiraj.csv","w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=["brand","title","price","sku","url"])
        w.writeheader()
        w.writerows(rows)

    print(f"Sparat {len(rows)} produkter i produkter_exkl_yogiraj.csv")

    main()
