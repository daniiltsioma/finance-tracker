import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../forms/Input";
import RadioInput from "../forms/RadioInput";
import { TransactionCategory, TransactionType } from "./TransactionList";

const Deposit = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    const transactions = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    );
    const newTransaction = {
      id: transactions.length,
      title: data.title,
      type: TransactionType.deposit,
      total: data.total,
      balance: transactions[transactions.length - 1].balance + data.total,
      category: data.category,
      date: Date.now(),
    };
    transactions.push(newTransaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  });

  return (
    <FormProvider {...methods}>
      <div className="w-[400px]">
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
            <Input
              id="title"
              type="text"
              placeholder="Title"
              errorMessage={methods.formState.errors.title?.message?.toString()}
            />
            <Input
              id="total"
              type="number"
              placeholder="Total"
              pre="$"
              errorMessage={methods.formState.errors.total?.message?.toString()}
            />
            <RadioInput
              id="category"
              options={[0, 1]}
              label="Select category"
              errorMessage={methods.formState.errors.category?.message?.toString()}
            />
            <button className="border-green-600 hover:border-green-700 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-sm mt-8">
              Submit
            </button>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default Deposit;
