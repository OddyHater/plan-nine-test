type DateString = string;

export type DateObject = {
  day: string;
  time: string;
};


export type TransactionDate = DateString | DateObject;
