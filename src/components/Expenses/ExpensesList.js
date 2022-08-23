import ExpenseItem from './ExpenseItem'
import './ExpensesList'

const ExpensesList = (props) => {
  if(props.items.length === 0){
    return <h2>FOUND NO EXPENSES</h2>
  }
  return (
    props.items.map((expense, idx) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={idx}
      ></ExpenseItem>
    ))
  )
}

export default ExpensesList