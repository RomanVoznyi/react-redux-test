import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { decrement, increment, step } from './counterActions';

const initialState = {
  result: 0,
  step: 1,
};

//Reducers
const resultReducer = createReducer(initialState.result, {
  [decrement]: (state, action) => state - action.payload,
  [increment]: (state, action) => state + action.payload,
});

const stepReducer = createReducer(initialState.step, {
  [step]: (state, action) => action.payload,
});

export default combineReducers({
  result: resultReducer,
  step: stepReducer,
});
