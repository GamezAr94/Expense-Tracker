import React, {useState, useEffect, useCallback} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const fetchExpenses = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch('https://react-http-23f3f-default-rtdb.firebaseio.com/expenses.json');
      if (!response.ok) {
        throw new Error('error fetching expenses');
      }
      const data = await response.json();
      const loadedExpenses = [];
      for (const key in data) {
        loadedExpenses.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          date: data[key].date
        });
      }
      setExpenses(loadedExpenses);
    } catch(error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  const addNewExpense = async (expense) => {
    await fetch('https://react-http-23f3f-default-rtdb.firebaseio.com/expenses.json', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    fetchExpenses();
  }

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  let content = <Expenses items={expenses} />;
  if (error) {
    content = <Card>{error}</Card>;
  }
  return (
  <div>
    <NewExpense onAddExpense={addNewExpense}/>
    {content}
  </div>);
}

export default App;
