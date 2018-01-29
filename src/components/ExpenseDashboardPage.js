import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import PracticeCom from './PracticeCom';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseListFilters />
    <PracticeCom />
    <ExpenseList />
  </div>
);



export default ExpenseDashboardPage;
