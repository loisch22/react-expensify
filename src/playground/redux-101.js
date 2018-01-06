import { createStore } from 'redux';

//Action generators - functions that return action objects
const incrementCount = (payload = {}) => ({
  //implicitly returns new action object
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
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

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

//force if you use set to set value to 101
store.dispatch({
  type: 'SET',
  count: 101
});
