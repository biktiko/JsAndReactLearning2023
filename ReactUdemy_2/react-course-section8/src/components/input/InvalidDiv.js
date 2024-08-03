import styles from './InvalidDiv.module.css'

function InvalidDiv(props){
    
    document.body.addEventListener('click', props.returningForm);

    return <div className={styles.invalid}>
        <div className={styles.invalidTop}>
            <h3>Invalid input</h3>
        </div>
        {props.valid==='empty' ? <p> Please, enter a valid name and age</p> : <p>Please, enter a correct age {'>'} 0 </p>}
        <button>Okay</button>
    </div>
}

export default InvalidDiv