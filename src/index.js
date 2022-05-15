import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../src/components/login'
import SearchBaby from '../src/components/searchBaby';
import Eating from '../src/components/eating';
import Care from '../src/components/care';

import HistoryCare from '../src/components/historyCare'
import { BrowserRouter, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider></Provider> */}
    <BrowserRouter>
      <Route path='/' component={LoginForm} exact />
      <Route path='/searchBaby' component={SearchBaby} />
      <Route path='/historyCare' component={HistoryCare} />
      <Route path='/care' component={Care} />
      <Route path='/eating' component={Eating} />
    </BrowserRouter>
  </React.StrictMode>,
  // <LoginForm />
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
