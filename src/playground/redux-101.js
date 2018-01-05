//use Actions to change redux store values
//Actions - object that gets sent to the store - describes type of action we'd like to take

import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  //gets called twice 1. when store initially runs 2. when store.dispatch() is called
  console.log('running');
  return state;
});

//Actions
//increment
//type: ACTION_TYPE_NAME
//send off action object to store by using dispatch
store.dispatch({
  type: 'INCREMENT'
});


//decrement

//reset

console.log(store.getState());
