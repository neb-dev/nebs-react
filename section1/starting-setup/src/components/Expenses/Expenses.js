import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  const [inputFilter, setInputFilter] = useState("2020");

  const saveFilterHandler = (inputFilter) => {
    setInputFilter(inputFilter);
    console.log(inputFilter);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter defaultFilter={inputFilter} onSaveFilter={saveFilterHandler} />
      {props.expenses.map((expense) => {
        return (
          <div className="container" key={expense.id}>
            <ExpenseItem
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          </div>
        );
      })}
    </Card>
  );
};

export default Expenses;

/* 
<ExpenseItem
  title={props.expenses.title}
  amount={props.expenses.amount}
  date={props.expenses.date}
/>
<ExpenseItem
  title={props.expenses.title}
  amount={props.expenses.amount}
  date={props.expenses.date}
/>
<ExpenseItem
  title={props.expenses.title}
  amount={props.expenses.amount}
  date={props.expenses.date}
/>
<ExpenseItem
  title={props.expenses.title}
  amount={props.expenses.amount}
  date={props.expenses.date}
/>
*/
