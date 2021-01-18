import actionTypes from './counterTypes';
//Action creator
const decrement = value => {
  return {
    type: actionTypes.DECREMENT,
    payload: value,
  };
};

const increment = value => {
  return {
    type: actionTypes.INCREMENT,
    payload: value,
  };
};

const step = value => {
  return {
    type: actionTypes.STEP,
    payload: value,
  };
};

export { decrement, increment, step };
