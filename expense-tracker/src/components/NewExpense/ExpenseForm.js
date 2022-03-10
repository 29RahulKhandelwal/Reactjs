import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(){
    const [entertedTitle,setEnteredTitle]=useState("");
    const [enteredAmount,setEnteredAmount]=useState("");
    const [enteredDate,setEnteredDate]=useState("");

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }

    function submitHandler(event){
        const expenseData={
            title:entertedTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        console.log(expenseData)
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        
        event.preventDefault();
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input onChange={titleChangeHandler} value={entertedTitle} type="text" />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input onChange={amountChangeHandler} value={enteredAmount} type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input onChange={dateChangeHandler} value={enteredDate} type="date" min="2022-01-01" max="2022-12-31" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}