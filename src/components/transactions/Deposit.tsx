import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../forms/Input";
import RadioInput from "../forms/RadioInput";

const Deposit = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <div className="w-1/3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Add Deposit</h2>
          <Link
            to="/"
            className="border-2 border-green-700 text-green-700 px-4 py-1 rounded-sm"
          >
            Back
          </Link>
        </div>
        <div className="mt-6">
          <form onSubmit={onSubmit}>
            <Input id="title" type="text" placeholder="Title" />
            <Input id="total" type="number" placeholder="Total" pre="$" />
            <RadioInput id="type" options={[0, 1]} label="Select type" />
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default Deposit;
