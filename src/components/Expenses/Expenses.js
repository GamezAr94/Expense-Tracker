import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
      return (
        <div>
          <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <h2>Let's get started!</h2>
            < ExpenseItem item={props.items[0]} />
            < ExpenseItem item={props.items[1]} />
            < ExpenseItem item={props.items[2]} />
            < ExpenseItem item={props.items[3]} />
          </Card>
        </div>
      );
}

export default Expenses;