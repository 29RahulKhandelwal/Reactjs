import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {filteredExpenses.length===0 && <p>No Expenses Found!</p>}
        
        {filteredExpenses.length > 0 && filteredExpenses.map((expense,index)=>(
          <ExpenseItem key={index} date={expense.date} title={expense.title} amount={expense.amount} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;