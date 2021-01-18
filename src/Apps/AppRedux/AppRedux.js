import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import CounterRedux from '../../Components/CounterRedux';

const AppRedux = () => {
  return (
    <>
      <Provider store={store}>
        <CounterRedux />
      </Provider>
    </>
  );
};

export default AppRedux;
