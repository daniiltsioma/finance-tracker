import Transaction from "./Transaction";

export interface TransactionData {
  id: number;
  title: string;
  type: TransactionType;
  category: TransactionCategory;
  total: number;
  date: number;
}

export enum TransactionType {
  expense,
  deposit,
}

export enum TransactionCategory {
  paycheck,
  entertainment,
  food,
  transportation,
}

const TransactionList = () => {
  const transactions: TransactionData[] = [
    {
      id: 0,
      title: "Paycheck",
      type: TransactionType.deposit,
      total: 450.5,
      date: Date.now(),
      category: TransactionCategory.paycheck,
    },
    {
      id: 1,
      title: "Netflix",
      type: TransactionType.expense,
      total: 15.99,
      date: Date.now(),
      category: TransactionCategory.entertainment,
    },
    {
      id: 2,
      title: "McDonald's",
      type: TransactionType.expense,
      total: 12.71,
      date: Date.now(),
      category: TransactionCategory.food,
    },
  ];

  return (
    <>
      <h2 className="text-xl font-bold">Transactions</h2>
      <div className="w-1/3">
        {transactions.map((t) => (
          <Transaction transaction={t} />
        ))}
      </div>
    </>
  );
};

export default TransactionList;
