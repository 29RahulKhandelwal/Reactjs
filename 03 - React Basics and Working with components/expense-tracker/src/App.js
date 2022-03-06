import ExpenseItem from "./components/ExpenseItem"
import expenses from "./components/expenses";

function App(){
    return (
        <div>
            <h2>Let's get started</h2>
            <ExpenseItem date={expenses[0].date.toISOString()} title={expenses[0].title} amount={expenses[0].amount} />
            <ExpenseItem date={expenses[1].date.toISOString()} title={expenses[1].title} amount={expenses[1].amount} />
            <ExpenseItem date={expenses[2].date.toISOString()} title={expenses[2].title} amount={expenses[2].amount} />
            <ExpenseItem date={expenses[3].date.toISOString()} title={expenses[3].title} amount={expenses[3].amount} />
        </div>
    )
}

export default App;