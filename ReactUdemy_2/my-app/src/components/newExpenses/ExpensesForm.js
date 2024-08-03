import React, {useState} from 'react'
import './ExpensesFrom.css'

function ExpensesForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value)
    }

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value)
    }

    function dateChangeHandler(event){
        setEnteredDate(event.target.value)
    }

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // function titleChangeHandler(event){
    // //    setUserInput({
    // //     ...userInput,
    // //     enteredTitle: event.target.value}
    // //    )

    //     setUserInput((prevState)=>  {return{ ...prevState, enteredTitle: event.target.value}})
    // }
    
    // function amountChangeHandler(event){
    //     setUserInput({
    //      ...userInput,
    //      enteredAmount: event.target.value}
    //     )
    //  }
     
    // function dateChangeHandler(event){
    //     setUserInput({
    //      ...userInput,
    //      enteredDate: event.target.value}
    //     )
    // }
    
    function submitHandler(event){
        event.preventDefault();

        const ExpenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

    
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveNewExpense(ExpenseDate);
    }

    return (
     <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <label>Title</label>
                <input value={enteredTitle} type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <input value={enteredAmount} type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input value={enteredDate} type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.changeState}>cansel</button>
                <button type='submit'>add new expense</button>
            </div>
        </div>
     </form>)
}

export default ExpensesForm;