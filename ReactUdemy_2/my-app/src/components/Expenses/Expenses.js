import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ProgressBar from "../Filter/ProgressBar";

import './Expenses.css'

function Expenses(props){

      const [filtredExpenses, filterExpensesProcess] = useState(props.expenses)
   
      function filterExpenses(year){
        
        if(year==undefined) year=document.getElementById('year').value
      
        if(year=="all")filterExpensesProcess(props.expenses);
        else{
          let filterExpensesInProcess = []
          props.expenses.map(expense => {
            if(expense.date.getFullYear()==year)
              filterExpensesInProcess.push(expense)
          })
          filterExpensesProcess(filterExpensesInProcess)
        }
      }

      return (
       <div className="expenses">
          <ProgressBar filterExpenses={filterExpenses} data={props}/>
        
           {filtredExpenses.length===0 ? <h2> No expenses found</h2> : 
               filtredExpenses.map(data => {
                  return <ExpenseItem key={data.id} date={data.date} title={data.title} amount={data.amount}/>  
                })
           }  
        </div>
      );
}

export default Expenses;