import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../forms/Input";
import RadioInput from "../forms/RadioInput";
import { TransactionType } from "./TransactionList";

const Expense = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit((data) => {
    const transactions = JSON.parse(
      localStorage.getItem("transactions") || "[]"
    );
    const oldBalance = Number(localStorage.getItem("balance"));
    const newBalance = oldBalance - Number(data.total);
    const newTransaction = {
      id: transactions.length,
      title: data.title,
      type: TransactionType.expense,
      total: data.total,
      balance: newBalance,
      category: data.category,
      date: Date.now(),
    };
    transactions.push(newTransaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("balance", String(newBalance));
    navigate("/");
  });

  return (
    <FormProvider {...methods}>
      <div className="w-[400px]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Add Expense</h2>
          <Link
            to="/"
            className="border-2 border-orange-600 text-orange-600 px-4 py-1 rounded-sm"
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
              options={[2, 3, 4]}
              label="Select category"
              errorMessage={methods.formState.errors.category?.message?.toString()}
              colorClasses="text-orange-600 border-orange-600 peer-checked:bg-orange-600"
            />
            <button className="border-orange-500 hover:border-orange-600 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-sm mt-8">
              Submit
            </button>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default Expense;
