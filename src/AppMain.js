import React from 'react';
import Navigation from './Components/Navigation';
import App from './Apps/App/App';
import AppRedux from './Apps/AppRedux/AppRedux';
import AppReduxToolkit from './Apps/AppReduxToolkit/AppReduxToolkit';
import { Route, Switch } from 'react-router-dom';
import s from './AppMain.module.css';

const AppMain = () => {
  return (
    <div className={s.App}>
      <Navigation />
      <div className={s.counterBox}>
        <Switch>
          <Route path="/redux" exact>
            <AppRedux />
          </Route>

          <Route path="/redux-toolkit">
            <AppReduxToolkit />
          </Route>

          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default AppMain;
