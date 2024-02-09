import { useFormContext } from "react-hook-form";
import { TransactionCategory } from "../transactions/TransactionList";

interface RadioInputProps {
  id: string;
  options: number[];
  label: string;
}

const RadioInput = ({ id, options, label }: RadioInputProps) => {
  const { register } = useFormContext();

  return (
    <div className="flex items-center">
      <div>{label}:</div>
      {options.map((op) => (
        <div className="ml-2">
          <input
            type="radio"
            {...register(id)}
            className="peer hidden"
            id={`${id}-${op}`}
          />
          <label
            htmlFor={`${id}-${op}`}
            className="border-green-600 border-2 text-green-600 px-4 py-2 peer-checked:bg-green-600 peer-checked:text-white cursor-pointer rounded-sm"
          >
            {TransactionCategory[op]}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
