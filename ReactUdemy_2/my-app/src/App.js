import React, {useState} from 'react'
import NewExpense from "./components/newExpenses/NewExpense"; 
import Expenses from "./components/Expenses/Expenses"

const expenses = [
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
    date: new Date(2020, 5, 12),
  },
];

function App() {

  const [newExpenses, newExpense] = useState(expenses)

  function newExpenseHandler(newData){
    newExpense(prevState => [newData, ...prevState])
  }
  
  return (
    <div>
      <NewExpense newExpenseHandler={newExpenseHandler}/>
      <Expenses expenses={newExpenses}/>   
    </div>
  );

  // return React.createElement('div', null,  
  //   React.createElement('h2', null, 'Lets get started!'),
  //   React.createElement(Expenses, null));          
}

export default App;
