import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No data</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <li key={expense.id}>
            <ExpenseItem
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ExpensesList;