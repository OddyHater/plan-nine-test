export function formatAmount(value: number | string): string {
  const number = typeof value === 'string' ? Number(value) : value;

  if (Number.isNaN(number)) return '';

  return new Intl.NumberFormat('ru-RU').format(number);
}
