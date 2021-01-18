import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import CounterReduxToolkit from '../../Components/CounterReduxToolkit';

const AppReduxToolkit = () => {
  return (
    <>
      <Provider store={store}>
        <CounterReduxToolkit />
      </Provider>
    </>
  );
};

export default AppReduxToolkit;
