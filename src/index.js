import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppMain from './AppMain';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppMain />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
