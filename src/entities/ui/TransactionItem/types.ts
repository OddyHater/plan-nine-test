import { Currency } from "@/shared/lib/utils/getCurrencySymbol";

export interface ITransactionItem {
  id: number;
  sum: number;
  type: 'income' | 'outcome';
  currency: Currency;
  description: string;
  date: number;
}