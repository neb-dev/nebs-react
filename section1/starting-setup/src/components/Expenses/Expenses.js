import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  const [inputFilter, setInputFilter] = useState("2020");

  const saveFilterHandler = (inputFilter) => {
    setInputFilter(inputFilter);
    console.log(inputFilter);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === inputFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultFilter={inputFilter}
        onSaveFilter={saveFilterHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
