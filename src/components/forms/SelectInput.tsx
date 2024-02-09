import { useFormContext } from "react-hook-form";
import { TransactionCategory } from "../transactions/TransactionList";

interface TextInputProps {
  id: string;
  // type: string;
  // placeholder: string;
  options: number[];
}

const SelectInput = ({ id, options }: TextInputProps) => {
  // const { register } = useFormContext();
  return (
    <select>
      {options.map((op) => (
        <option value={op}>{TransactionCategory[op]}</option>
      ))}
    </select>
    // <input
    //   id={id}
    //   type={type}
    //   placeholder={placeholder}
    //   {...register(id, {
    //     required: {
    //       value: true,
    //       message: "This field is required",
    //     },
    //   })}
    //   className="block w-1/2 border-2 border-gray-100 mb-4 px-2 py-1"
    // />
  );
};

export default SelectInput;
