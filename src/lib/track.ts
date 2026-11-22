export function track(event: string, detail: Record<string, string> = {}) {
  const payload = { event, ...detail };
  const win = window as Window & { dataLayer?: unknown[] };
  win.dataLayer = win.dataLayer ?? [];
  win.dataLayer.push(payload);
  if (import.meta.env.DEV) console.info("[dataLayer]", payload);
}
