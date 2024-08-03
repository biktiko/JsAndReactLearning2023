import React, {useState} from 'react'
import './newExpense.css'
import ExpensesForm from './ExpensesForm'
import FormButton from './FormButton'


function NewExpense(props){
    const [showing, toShowOrNot] = useState(false)

    function changeState(){
        toShowOrNot(prevStae=>!prevStae);
    }

    function onSaveNewExpense(newExpenseData){
        newExpenseData={
            ...newExpenseData,
            id: Math.random().toString()
        }
        props.newExpenseHandler(newExpenseData)
    }

    return(
        <div className='new-expense'>
            {showing ? 
                <ExpensesForm changeState={changeState} onSaveNewExpense = {onSaveNewExpense}/> : 
                <FormButton changeState={changeState}/>}
        </div>
    )
}

export default NewExpense