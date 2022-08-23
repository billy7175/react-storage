import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
const saveExpenseDataHandler = (enteredExpenseData) => {
  console.log(enteredExpenseData)
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  } 

  console.log('#expenseDataexpenseDataexpenseData', expenseData)
  props.onAddExpense(expenseData)

  
}

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
  </div>
}

export default NewExpense