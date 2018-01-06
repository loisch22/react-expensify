import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'lasdk',
    description: 'January Rent',
    note: 'This is was the final payment for that address.',
    amount: 87500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
