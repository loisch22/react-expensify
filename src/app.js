import React from 'react';
import ReactDOM from 'react-dom';
//browserrouter once to create the router - route for every single page
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    This is from my edit expense page
  </div>
);
const HelpPage = () => (
  <div>
    This is from my help page
  </div>
);
const NotFoundPage = () => (
  <div>
    404!
  </div>
);

//path is optional - no path matches with all other paths
//use another component react router gives aka <Switch>
//Switch looks for match then stops when match is found - doesn't look at down below - notfound will only show when no matches are found
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
