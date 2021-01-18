import { createStore } from 'redux';
import rootReducer from './counterReducer';

//Store

const store = createStore(rootReducer);

export default store;
