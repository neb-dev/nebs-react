import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "../Expenses/Expenses.css";

const Expenses = (props) => {
  return (
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
