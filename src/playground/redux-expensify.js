import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),//npm library uuid
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducers
const expensesReducerDefaultState = [];

// ES6 Spread Operator
// [...names] - add name [...names, 'Sam'] - name value doesn't change
//return action.expense to return entire array object
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    default:
      return state;
  }
};

const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Rent', amount: 100 }));

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
