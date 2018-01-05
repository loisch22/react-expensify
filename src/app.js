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
const AddExpensePage = () => (
  <div>
    This is from my Add Expense Component
  </div>
);

//BrowserRouter expects one child so put div and place as many routes inside div
//currently not using client-side server - make change to dev-server - we want index.html to load and react-router to decide what to show in browser
//made change in webpack
//exact={true} means path needs to match exactly to render to page
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
