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
} from "@fortawesome/free-solid-svg-icons";

interface TransactionProps {
  transaction: TransactionData;
}

const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <div className="flex bg-slate-100 mb-4 p-4 items-center rounded-sm">
      <div className="w-12">
        {transaction.category === TransactionCategory.food && (
          <FontAwesomeIcon
            icon={faUtensils}
            className="text-red-700 text-[30px]"
          />
        )}
        {transaction.category === TransactionCategory.entertainment && (
          <FontAwesomeIcon
            icon={faGamepad}
            className="text-purple-700 text-[30px]"
          />
        )}
        {transaction.category === TransactionCategory.paycheck && (
          <FontAwesomeIcon
            icon={faSackDollar}
            className="text-green-700 text-[30px]"
          />
        )}
        {transaction.category === TransactionCategory.transportation && (
          <FontAwesomeIcon icon={faBus} className="text-blue-700 text-[30px]" />
        )}
      </div>
      <div>
        <div className="text-lg font-bold">{transaction.title}</div>
        <div>
          {transaction.type === TransactionType.expense && "-"}$
          {transaction.total.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
