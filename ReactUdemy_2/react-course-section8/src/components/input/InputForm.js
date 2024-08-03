// import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react'
import styles from './inputForm.module.css'
import InvalidDiv from './InvalidDiv'

// console.log(ReactDOM)

function InputForm(props) {

    const newUserName=useRef();
    const newUserAge=useRef();

    const [ isValid, setValid ] = useState(true)
    
    function addUser(event){
        event.preventDefault();
        const newUserData={
            name: newUserName.current.value,
            age:  newUserAge.current.value
        }
        if (parseInt(newUserData.age) > 0 && newUserName.current.value!=""){
            setValid(true)
            props.changingData([newUserData, 'add']);
        }else 
        parseInt(newUserData.age) <= 0 ? setValid('wrongeAge') : setValid('empty');

        newUserName.current.value='';
        newUserAge.current.value ='';
    }

    function returningForm() {
        setValid(true)
    }

    return (
        <form className={styles.inputForm} onSubmit={addUser}>
            <label>Username</label>
            <input ref={newUserName} type='text'></input>
            <label>Age (years)</label>
            <input ref={newUserAge}  type='number' step={1}></input>
            <button type='submit'>Add user</button>
            {isValid !== true && <InvalidDiv returningForm={returningForm} valid={isValid} />}
            {/* {ReactDOM.createPortal(<h2>test</h2>, document.getElementById('output'))} */}
        </form>
    )
}

export default InputForm