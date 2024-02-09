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
  const transactions = localStorage.getItem("transactions");
  return transactions ? JSON.parse(transactions).reverse() : {};
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
