import { Link } from "react-router-dom";
import Transaction from "./Transaction";

interface TransactionListProps {
  transactions: TransactionData[];
}

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

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <>
      <div className="w-[400px]">
        <div className="flex mt-4">
          <Link
            className="w-1/2 border-green-700 bg-green-700 text-white text-center px-8 py-2 rounded-sm mr-4"
            to="/deposit"
          >
            Add Deposit
          </Link>
          <Link
            className="w-1/2 border-orange-600 bg-orange-600 text-white text-center px-8 py-2 rounded-sm"
            to="/expense"
          >
            Add Expense
          </Link>
        </div>
        <h2 className="text-xl font-bold my-4">Transactions</h2>
        {transactions.map((t) => (
          <Transaction transaction={t} key={t.id} />
        ))}
      </div>
    </>
  );
};

export default TransactionList;
