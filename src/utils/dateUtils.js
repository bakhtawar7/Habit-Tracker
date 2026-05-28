export function formatDate(date) {
  return new Date(date).toISOString().split("T")[0];
}

export function getStartOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  return d;
}

export function getWeekDays(start) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
}

export function isToday(date) {
  return formatDate(date) === formatDate(new Date());
}