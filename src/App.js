import { useState } from "react";
import ExpenseForm from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const dummy_expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Car Repair",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car Design",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car Design",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];

  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (addedExpenseData) => {
    setExpenses((prev) => {
      return [addedExpenseData, ...prev];
      // return {addedExpenseData, ...prev}
    });
  };

  return (
    <div>
      {/* <h1>Let's get started</h1> */}
      <ExpenseForm onAddExpense={addExpenseHandler}></ExpenseForm>
      <Expenses items={expenses}></Expenses>
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem> */}
      {/* <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem> */}
      {/* <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem> */}
      {/* <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem> */}
    </div>
  );
}

export default App;
