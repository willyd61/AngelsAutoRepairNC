const WEEKDAY_SPAN: Record<string, [number, number] | null> = {
  Sun: null,
  Mon: [8 * 60 + 30, 18 * 60 + 30],
  Tue: [8 * 60 + 30, 18 * 60 + 30],
  Wed: [8 * 60 + 30, 18 * 60 + 30],
  Thu: [8 * 60 + 30, 18 * 60 + 30],
  Fri: [8 * 60 + 30, 18 * 60 + 30],
  Sat: [8 * 60 + 30, 16 * 60 + 30],
};

export function shopStatus(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const read = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";
  const weekday = read("weekday");
  const mins = Number(read("hour")) * 60 + Number(read("minute"));
  const span = WEEKDAY_SPAN[weekday] ?? null;
  if (!span) return { open: false, label: "Closed today · Sunday" };
  const closeLabel = weekday === "Sat" ? "4:30 PM" : "6:30 PM";
  if (mins >= span[0] && mins < span[1]) return { open: true, label: `Open today until ${closeLabel}` };
  if (mins < span[0]) return { open: false, label: "Opens today at 8:30 AM" };
  return { open: false, label: "Closed for today" };
}
