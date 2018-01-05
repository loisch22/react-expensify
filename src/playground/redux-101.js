//use Actions to change redux store values
//Actions - object that gets sent to the store - describes type of action we'd like to take

import { createStore } from 'redux';

//action parameter = store.dispatch action being passed
const store = createStore((state = { count: 0 }, action) => {
  //check action type
  //don't change state/action but use value to commute new value
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + 1
    };
  } else {
    return state;
  }
});

console.log(store.getState()); 
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
