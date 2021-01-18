import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Apps/AppRedux/Redux/counterActions';
import s from './CounterRedux.module.css';

const CounterRedux = ({ result, step, onDecrement, onIncrement, setStep }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (Number(value) === 0) {
      return;
    }
    setStep(Number(value));
  };

  return (
    <div className={s.wrapper}>
      <h2>Redux Counter</h2>
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
        onClick={() => onDecrement(step)}
      >
        Decrease by {step}
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => onIncrement(step)}
      >
        Increase by {step}
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  result: state.result,
  step: state.step,
});

const mapDispatchToProps = dispatch => ({
  onDecrement: value => dispatch(actions.decrement(value)),
  onIncrement: value => dispatch(actions.increment(value)),
  setStep: value => dispatch(actions.step(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
