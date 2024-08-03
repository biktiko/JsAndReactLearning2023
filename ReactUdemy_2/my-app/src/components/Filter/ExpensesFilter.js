import React, {useState} from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const [prevData, newData] = useState(props.data);
  const expenses=props.data.expenses

  if(prevData!=props.data){
    let filtredMonths =[];
    expenses.map((expense, IdOfMonth) => {
      if(expense.date.getFullYear()==document.getElementById('year').value)
        filtredMonths.push(expenses[IdOfMonth].date.getMonth());
    })
    props.newYear(filtredMonths);
    newData(props.data);
  }

  function changeYearHandler(event){
    let filtredMonths =[];
    expenses.map((expense, IdOfMonth) => {
      if(expense.date.getFullYear()==event.target.value)
      filtredMonths.push(expenses[IdOfMonth].date.getMonth());
    })
    props.newYear(filtredMonths, event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label >Filter by year</label>
        <select id='year' onChange={changeYearHandler}>
          <option value='all'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;