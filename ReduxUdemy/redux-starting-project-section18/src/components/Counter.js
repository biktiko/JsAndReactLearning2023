import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/count-slice';

const Counter = () => {
  const dispatch = useDispatch(); //method for store changing
  const counter = useSelector(state=>state.counter.counter); //geting store data
  const show = useSelector(state=>state.counter.showCounter);

  const incrementHandler = () => dispatch(counterActions.increment()) ;
  const increseHandler = () => dispatch(counterActions.increse(10)) ;
  const discrementHandler = () => dispatch(counterActions.discrement()) ;
  const toggleCounterHandler = () => dispatch(counterActions.toggle());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className={classes.counterChangingDiv}>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increseHandler}>increse by 10</button>
        <button onClick={discrementHandler}>discrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
