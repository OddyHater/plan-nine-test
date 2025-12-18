export function formatCard(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
}

export const maskCard = (card: string) => {
  if (card.length < 4) return card;

  return `**** **** **** ${card.slice(-4)}`;
};
