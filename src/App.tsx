import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(20);

  return (
    <div className="App">
      <div className="text-[50px] font-bold">
        Balance:{" "}
        <span className={balance > 0 ? "text-green-700" : "text-red-700"}>
          {balance < 0 && "-"}${Math.abs(balance).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default App;
