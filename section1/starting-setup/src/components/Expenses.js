import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            key={expense.id}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
