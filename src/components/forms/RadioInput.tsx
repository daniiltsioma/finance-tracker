import { useFormContext } from "react-hook-form";
import { TransactionCategory } from "../transactions/TransactionList";

interface RadioInputProps {
  id: string;
  options: number[];
  label: string;
  errorMessage?: string;
  colorClasses?: string;
}

const RadioInput = ({
  id,
  options,
  label,
  errorMessage,
  colorClasses = "border-black text-black",
}: RadioInputProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <div className="flex items-center flex-wrap">
        <div className={`${errorMessage && "text-red-600"} mb-2 mr-2`}>
          {label}:
        </div>
        {options.map((op) => (
          <div className="mr-2" key={op}>
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
              className={`inline-block ${colorClasses} border-2 px-4 py-1 mb-2 peer-checked:text-white cursor-pointer rounded-sm`}
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
