import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      {/* {expensesContent} */}
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;
