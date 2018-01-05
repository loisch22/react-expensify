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
const EditExpensePage = () => (
  <div>
    This is from the edit expense page
  </div>
);
const HelpPage = () => (
  <div>
    This is from the help page
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
