import React from "react";
import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseData = (enteredExpeseData) => {
        const expenseData = {
            ...enteredExpeseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>);
}

export default NewExpense;