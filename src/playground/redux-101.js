import { createStore } from 'redux';

//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

//implicitly return an object
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//dynamic action
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }))

//better to use function name to avoid typos, clearer error msg
store.dispatch(incrementCount());

//generic action
store.dispatch({
  type: 'RESET'
});

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });
store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//   type: 'DECREMENT',
// });
store.dispatch(decrementCount());

//force if you use set to set value to 101
store.dispatch({
  type: 'SET',
  count: 101
});
