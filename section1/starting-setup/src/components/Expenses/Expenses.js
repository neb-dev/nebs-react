import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  const [inputFilter, setInputFilter] = useState("");

  const saveFilterHandler = (inputFilter) => {
    setInputFilter(inputFilter);
    console.log(inputFilter);
  }

  return (
    <div>
      <ExpensesFilter onSaveFilter={saveFilterHandler} />

      <Card className="expenses">
        {props.expenses.map((expense) => {
          return (
            <div className="container">
              <ExpenseItem
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
                key={expense.id}
              />
            </div>
          );
        })}
      </Card>
    </div>
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
