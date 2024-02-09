import {
  TransactionCategory,
  TransactionData,
  TransactionType,
} from "./TransactionList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faGamepad,
  faSackDollar,
  faBus,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";

interface TransactionProps {
  transaction: TransactionData;
}

const Transaction = ({ transaction }: TransactionProps) => {
  console.log(transaction);
  const cat = Number(transaction.category);

  return (
    <div className="flex bg-slate-100 mb-4 p-4 items-center rounded-sm">
      <div className="w-12">
        {cat === TransactionCategory.food && (
          <FontAwesomeIcon
            icon={faUtensils}
            className="text-red-700 text-[30px]"
          />
        )}
        {cat === TransactionCategory.entertainment && (
          <FontAwesomeIcon
            icon={faGamepad}
            className="text-purple-700 text-[30px]"
          />
        )}
        {cat === TransactionCategory.paycheck && (
          <FontAwesomeIcon
            icon={faSackDollar}
            className="text-green-700 text-[30px]"
          />
        )}
        {cat === TransactionCategory.transportation && (
          <FontAwesomeIcon icon={faBus} className="text-blue-700 text-[30px]" />
        )}
        {cat === TransactionCategory.deposit && (
          <FontAwesomeIcon
            icon={faMoneyBillTransfer}
            className="text-green-700 text-[30px]"
          />
        )}
      </div>
      <div>
        <div className="text-lg font-bold">{transaction.title}</div>
        <div>
          {transaction.type === TransactionType.expense && "-"}$
          {Number(transaction.total).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
