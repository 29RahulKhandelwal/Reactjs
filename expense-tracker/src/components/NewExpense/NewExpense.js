import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(){
    function saveExpenseDataHandler(entertedExpenseData){
        const expenseData={
            ...entertedExpenseData,
            id:Math.floor((Math.random()*100)+1).toString()
        }
        console.log(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;