export type Currency = 'RUB' | 'USD';

const currencySymbolMap: Record<Currency, string> = {
  RUB: '₽',
  USD: '$',
};

export function getCurrencySymbol(currency: Currency): string {
  return currencySymbolMap[currency];
}
