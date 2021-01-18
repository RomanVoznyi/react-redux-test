import { useState } from 'react';
import s from './Counter.module.css';

const Counter = () => {
  const [result, setResult] = useState(0);
  const [step, setStep] = useState(1);
  const [value, setValue] = useState('');

  const DECREMENT = 'decrement';
  const INCREMENT = 'increment';

  const handleClick = ({ target }) => {
    target.name === DECREMENT
      ? setResult(prevState => prevState - step)
      : setResult(prevState => prevState + step);
  };

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
      <h2>Vanila Counter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="number" value={value} onChange={handleChange} />
        </label>
        <button type="submit">Set step</button>
      </form>
      <div className={s.result}>{result}</div>
      <button
        type="button"
        name={DECREMENT}
        className={s.button}
        onClick={handleClick}
      >
        Decrease by
        {step}
      </button>
      <button
        type="button"
        name={INCREMENT}
        className={s.button}
        onClick={handleClick}
      >
        Increase by {step}
      </button>
    </div>
  );
};

export default Counter;
