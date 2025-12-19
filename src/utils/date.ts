export function getGreeting(name: string) {
  const hour = new Date().getHours();

  if (hour < 12) return `Bom dia, ${name}! ☀️`;
  if (hour < 18) return `Boa tarde, ${name}! 🌻`;
  return `Boa noite, ${name}! 🌙`;
}

export function getCurrentMonthYear() {
  const date = new Date();
  const month = date.toLocaleString("pt-BR", { month: "long" });
  const year = date.getFullYear();

  return `${month}/${year}`;
}

export function getFormattedFullDate(date: Date | string = new Date()) {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  const day = String(parsedDate.getDate()).padStart(2, "0");
  const month = parsedDate.toLocaleString("pt-BR", { month: "long" });
  const year = parsedDate.getFullYear();

  return `${day} de ${month} de ${year}`;
}
