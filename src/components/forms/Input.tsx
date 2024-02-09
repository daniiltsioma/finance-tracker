import { useFormContext } from "react-hook-form";

interface TextInputProps {
  id: string;
  type: string;
  placeholder: string;
}

const TextInput = ({ id, type, placeholder }: TextInputProps) => {
  // const { register } = useFormContext();
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      // {...register(id, {
      //   required: {
      //     value: true,
      //     message: "This field is required",
      //   },
      // })}
      className="block w-1/2 border-2 border-gray-100 mb-4 px-2 py-1"
    />
  );
};

export default TextInput;
