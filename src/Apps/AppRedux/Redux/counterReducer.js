import { combineReducers } from 'redux';
import actionTypes from './counterTypes';

const initialState = {
  result: 0,
  step: 1,
};

//Reducers
const resultReducer = (state = initialState.result, { type, payload }) => {
  switch (type) {
    case actionTypes.DECREMENT:
      return state - payload;
    case actionTypes.INCREMENT:
      return state + payload;

    default:
      return state;
  }
};

const stepReducer = (state = initialState.step, { type, payload }) => {
  switch (type) {
    case actionTypes.STEP:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  result: resultReducer,
  step: stepReducer,
});
