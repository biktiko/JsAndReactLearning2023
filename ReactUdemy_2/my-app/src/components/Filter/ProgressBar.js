import React, {useState} from 'react'

import './ProgressBar.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import "./Filter.css"

function ProgressBar(props) {

  let months = {'jan':0, 'feb':0, 'mar':0, 'apr':0, 'may':0, 'jun':0, 'jul':0, 'aug':0, 'sep':0, 'oct':0, 'nov':0, 'dec':0};
  const [filtredMonths, filter] = useState(months);

  function newYear(filtredMonths, year){
    let newMonths={...months}
    filtredMonths.map(idOfMonth => newMonths[Object.keys(newMonths)[idOfMonth]]++)
    Object.keys(newMonths).map(month=>{
      if(newMonths[month]==0) newMonths[month]='0%'
      else newMonths[month]=Math.floor((newMonths[month]/filtredMonths.length*100)) + "%"
    })
    filter(newMonths);
    props.filterExpenses(year)
  }

    return (
    <div>
      <ExpensesFilter data={props.data} months={months} newYear={newYear}/>
      <Card className='filter'>
        {Object.keys(filtredMonths).map((month, index) => {
          return(
            <div key={index.toString()} className='progressBar'>
              <div className="loadBar">
                <strong className="bar" style={{ height: filtredMonths[month] }}>{filtredMonths[month]}</strong>
              </div>
              <h6>{month}</h6>
            </div>
          )
        })}
      </Card>
    </div>
  )
}

export default ProgressBar