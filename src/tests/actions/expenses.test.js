// test files run through babel setup
import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  // toBe compares using === which makes the result never the same - booleans/numbers/strings use toBe
  // check if properties are the same - toEqual to compare 2 objects/arrays
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});
