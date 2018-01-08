import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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

setTimeout(() => {
  store.dispatch(setTextFilter('bill'))
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// Provider will pass the store - pass prop aka store
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
