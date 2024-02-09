import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TransactionList, {
  TransactionCategory,
  TransactionType,
} from "./components/transactions/TransactionList";
import { loader as transactionListLoader } from "./components/transactions/TransactionList";
import Deposit from "./components/transactions/Deposit";
import Expense from "./components/transactions/Expense";

const defaultTransactions = [
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

if (!localStorage.getItem("transactions")) {
  localStorage.setItem("transactions", JSON.stringify(defaultTransactions));
}

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TransactionList />,
        loader: transactionListLoader,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/expense",
        element: <Expense />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
