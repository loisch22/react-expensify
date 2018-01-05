//use Actions to change redux store values
//Actions - object that gets sent to the store - describes type of action we'd like to take

import { createStore } from 'redux';

//calls store when loaded then again when dispatch is called
const store = createStore((state = { count: 0 }, action) => {
  //more common to use switch
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());
//Actions run according to order of dispatch called below
//increment
store.dispatch({
  type: 'INCREMENT'
});

//decrement
store.dispatch({
  type: 'DECREMENT'
});

//reset
store.dispatch({
  type: 'RESET'
});

console.log(store.getState());
