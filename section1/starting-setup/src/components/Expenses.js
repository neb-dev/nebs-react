import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
