import React from 'react';
import ReactDOM from 'react-dom';
//browserrouter once to create the router - route for every single page
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//example component
const ExpenseDashboardPage = () => (
  <div>
    This is from my Dashboard Component
  </div>
);

//syntax for setting up router
//route requires props
//path = url & component
const routes = (
  <BrowserRouter>
    <Route path="/" component={ExpenseDashboardPage}/>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
