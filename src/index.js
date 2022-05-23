import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../src/components/login'
import SearchBaby from '../src/components/searchBaby';
import Care from '../src/components/care';
import HistoryCare from '../src/components/historyCare';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider></Provider> */}
    <BrowserRouter>
      <Route path='/' component={LoginForm} exact />
      <Route path='/searchBaby' component={SearchBaby} />
      <Route path='/historyCare' component={HistoryCare} />
      <Route path='/care' component={Care} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
