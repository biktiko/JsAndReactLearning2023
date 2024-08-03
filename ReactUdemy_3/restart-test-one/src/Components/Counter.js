import {useEffect, useState} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);
    
    //useEffect(()=>{console.log('useEffect')}, [count])

    return (
        <div>
            <h1>Exercise 2</h1>
            Count: <p>{count}</p>
            <button type="button" onClick={()=>setCount(count+1)}> +1 </button>
            <button type="button" onClick={()=>setCount(count-1)}> -1 </button>
        </div>
    )
}

export default Counter