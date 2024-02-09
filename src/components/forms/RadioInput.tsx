import { useFormContext } from "react-hook-form";
import { TransactionCategory } from "../transactions/TransactionList";

interface RadioInputProps {
  id: string;
  options: number[];
  label: string;
  errorMessage?: string;
}

const RadioInput = ({ id, options, label, errorMessage }: RadioInputProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <div className="flex items-center">
        <div className={`${errorMessage && "text-red-600"}`}>{label}:</div>
        {options.map((op) => (
          <div className="ml-2" key={op}>
            <input
              type="radio"
              {...register(id, {
                required: {
                  value: true,
                  message: "This field is required.",
                },
              })}
              className={`peer hidden ${
                errorMessage ? "border-red-300" : "border-slate-100"
              }`}
              value={op}
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
      <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
    </div>
  );
};

export default RadioInput;
