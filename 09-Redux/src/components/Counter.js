import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();
  const dataCounter=useSelector(state=>state.counter.counter);
  const toggleCounter=useSelector(state=>state.counter.showCounter);

  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const incrementbyfiveHandler=()=>{
    dispatch(counterActions.increase(5))
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <>
        <div className={classes.value}>{dataCounter}</div>
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={incrementbyfiveHandler}>Increment 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      </>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
