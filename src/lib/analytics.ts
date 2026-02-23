declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  // GA4 direct
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
  // GTM dataLayer fallback
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}
