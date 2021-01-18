import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../Apps/AppRedux/Redux/counterActions';
import s from './CounterReduxToolkit.module.css';

const CounterRedux = () => {
  const [value, setValue] = useState('');
  const result = useSelector(state => state.result);
  const step = useSelector(state => state.step);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (Number(value) === 0) {
      return;
    }
    dispatch(actions.step(Number(value)));
  };

  return (
    <div className={s.wrapper}>
      <h2>Redux Toolkit Counter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="number" value={value} onChange={handleChange} />
        </label>
        <button type="submit">Set step</button>
      </form>
      <div className={s.result}>{result}</div>
      <button
        type="button"
        className={s.button}
        onClick={() => dispatch(actions.decrement(step))}
      >
        Decrease by {step}
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => dispatch(actions.increment(step))}
      >
        Increase by {step}
      </button>
    </div>
  );
};

export default CounterRedux;
