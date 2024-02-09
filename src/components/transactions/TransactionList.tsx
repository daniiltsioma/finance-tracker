import { Link, useLoaderData } from "react-router-dom";
import Transaction from "./Transaction";

export interface TransactionData {
  id: number;
  title: string;
  type: TransactionType;
  category: TransactionCategory;
  total: number;
  balance: number;
  date: number;
}

export enum TransactionType {
  expense,
  deposit,
}

export enum TransactionCategory {
  paycheck,
  deposit,
  entertainment,
  food,
  transportation,
}

export const loader = async () => {
  return [
    {
      id: 0,
      title: "Paycheck",
      type: TransactionType.deposit,
      total: 450.5,
      balance: 450.5,
      date: Date.now(),
      category: TransactionCategory.paycheck,
    },
    {
      id: 1,
      title: "Netflix",
      type: TransactionType.expense,
      total: 15.99,
      balance: 434.51,
      date: Date.now(),
      category: TransactionCategory.entertainment,
    },
    {
      id: 2,
      title: "McDonald's",
      type: TransactionType.expense,
      total: 12.71,
      balance: 421.8,
      date: Date.now(),
      category: TransactionCategory.food,
    },
  ];
};

const TransactionList = () => {
  const transactions = useLoaderData() as TransactionData[];

  return (
    <>
      <h2 className="text-xl font-bold">Transactions</h2>
      <div className="w-[400px]">
        {transactions.reverse().map((t) => (
          <Transaction transaction={t} key={t.id} />
        ))}
        <div className="flex">
          <Link
            className="border-green-700 bg-green-700 text-white text-center px-8 py-2 rounded-sm mr-4"
            to="/deposit"
          >
            Add Deposit
          </Link>
          <Link
            className="border-red-700 bg-red-700 text-white text-center px-8 py-2 rounded-sm"
            to="/expense"
          >
            Add Expense
          </Link>
        </div>
      </div>
    </>
  );
};

export default TransactionList;
