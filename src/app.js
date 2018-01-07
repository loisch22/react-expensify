import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Water Bill',
  note: 'Pay every last week of the month',
  amount: 200,
  createdAt: 2000
}));
store.dispatch(addExpense({
  description: 'Gas Bill',
  note: 'Pay every week',
  amount: 30,
  createdAt: 4000
}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));
