export function formatTime(timestamp: number): string {
  const date = new Date(
    timestamp < 1e12 ? timestamp * 1000 : timestamp
  );

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

export function formatDate(
  timestamp: number,
): string {
  const date = new Date(
    timestamp < 1e12 ? timestamp * 1000 : timestamp
  );

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');

  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}