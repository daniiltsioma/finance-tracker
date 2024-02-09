import { useLoaderData } from "react-router-dom";
import TransactionList, {
  TransactionData,
} from "./transactions/TransactionList";

interface HomeLoaderData {
  balance: number;
  transactions: TransactionData[];
}

export const loader = () => {
  const transactions = localStorage.getItem("transactions");
  return {
    balance: Number(localStorage.getItem("balance")),
    transactions: transactions ? JSON.parse(transactions).reverse() : {},
  };
};

const Home = () => {
  const { balance, transactions } = useLoaderData() as HomeLoaderData;
  return (
    <>
      <div className="text-[50px] font-bold">
        Balance:{" "}
        <span className={balance > 0 ? "text-green-700" : "text-red-700"}>
          {balance < 0 && "-"}${Math.abs(balance).toFixed(2)}
        </span>
      </div>
      <TransactionList transactions={transactions} />
    </>
  );
};

export default Home;
