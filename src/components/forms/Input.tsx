import { useFormContext } from "react-hook-form";

interface TextInputProps {
  id: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  pre?: string;
}

const Input = ({
  id,
  type,
  placeholder,
  errorMessage,
  pre,
}: TextInputProps) => {
  const { register } = useFormContext();
  return (
    <div className="mb-4">
      <div className="flex items-center">
        {pre && (
          <div className="p-2 bg-gray-100 border-y-2 border-l-2 min-w-8 border-gray-100 text-center">
            {pre}
          </div>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          step={type === "number" ? 0.01 : undefined}
          {...register(id, {
            required: {
              value: true,
              message: "This field is required.",
            },
          })}
          className={`block w-full border-2 ${
            errorMessage ? "border-red-300" : "border-slate-100"
          } px-2 py-2`}
        />
      </div>
      <div className="text-red-600 text-sm">{errorMessage}</div>
    </div>
  );
};

export default Input;
