import { useState } from "react";
import TransactionList from "./components/transactions/TransactionList";

function App() {
  const [balance] = useState(20);

  return (
    <div className="App p-8">
      <div className="text-[50px] font-bold">
        Balance:{" "}
        <span className={balance > 0 ? "text-green-700" : "text-red-700"}>
          {balance < 0 && "-"}${Math.abs(balance).toFixed(2)}
        </span>
      </div>
      <TransactionList />
    </div>
  );
}

export default App;
