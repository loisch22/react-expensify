import React from 'react';
import ReactDOM from 'react-dom';
//import components
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my Dashboard Component
  </div>
);
const AddExpensePage = () => (
  <div>
    This is from my Add Expense Component
  </div>
);
const EditExpensePage = () => (
  <div>
    This is from my edit expense page
  </div>
);
const HelpPage = () => (
  <div>
    This is from my help page
  </div>
);
//add event listener override browser - use JS code to change the page - React router gives us components to use client side routing
//Behind scenes uses client-side routing
//JS gives call to ReactDOM.render to re-render the page
//When linking internally use <Link> vs <a>
const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
);

//Goal: client-side routing - not full page refresh - doesn't need to rely on server

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
