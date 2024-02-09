import { useFormContext } from "react-hook-form";

interface TextInputProps {
  id: string;
  type: string;
  placeholder: string;
  pre?: string;
}

const Input = ({ id, type, placeholder, pre }: TextInputProps) => {
  const { register } = useFormContext();
  return (
    <div className="flex items-center mb-4">
      {pre && (
        <div className="p-2 bg-gray-100 border-y-2 border-l-2 min-w-8 border-gray-100 text-center">
          {pre}
        </div>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, {
          required: {
            value: true,
            message: "This field is required",
          },
        })}
        className="block w-full border-2 border-gray-100 px-2 py-2"
      />
    </div>
  );
};

export default Input;
