import { createAction } from '@reduxjs/toolkit';

//Action creator

const decrement = createAction('counter/decrement');
const increment = createAction('counter/increment');
const step = createAction('counter/step');

export { decrement, increment, step };
