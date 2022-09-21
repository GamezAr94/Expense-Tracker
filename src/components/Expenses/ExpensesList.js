import React from "react";
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';


const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }

    const expensesContent = props.items.map((expense) => 
    <ExpenseItem
    key={expense.id} 
    item={expense}/>);

    return <ul className="expenses-list">
            {expensesContent}
        </ul>;
}
export default ExpensesList;