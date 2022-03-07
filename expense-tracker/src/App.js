import ExpenseItem from "./components/ExpenseItem"
import expenses from "./components/expenses";

function createExpenseItemCard(expenses){
    return (
        <ExpenseItem date={expenses.date} title={expenses.title} amount={expenses.amount} />
    )
}

function App(){
    return (
        <div>
            <h2>Let's get started</h2>
            {expenses.map(createExpenseItemCard)}
        </div>
    )
}

export default App;