import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[2]
  ]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newExpense = {
    id: '4',
    description: 'Dog Toys',
    note: '',
    amount: 1500,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses, state.newExpense ]);
});

test('should edit an expense', () => {
  const amount = 100;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
  const amount = 100;
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
