export function formatCard(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
}

export function isCardValid(value: string): boolean {
  return value.replace(/\D/g, '').length === 16;
}