import styles from './Output.module.css'

function Output(props) {
    
    function removeUser(event) {
        props.data.splice(event.target.id, 1);        
        props.changingData([props.data, 'remove']);
    }

    return (
        <div id='output' className={styles.output}>
            {props.data.map((user, key) => {
                return (
                    <div key={key.toString()} >
                        <input
                            value={`${user.name} (${user.age} years old)`}
                            type='text'
                            readOnly />
                        <button id={key} onClick={removeUser} >remove</button>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default Output
