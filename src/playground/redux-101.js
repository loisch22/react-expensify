//install Redux $yarn add redux@3.7.2
//call once to create store - this is from redux library
import { createStore } from 'redux';

//create redux store
//createStore(must pass function)
//state is current state aka prevState
//define state within (same syntax as this.state = { })
const store = createStore((state = { count: 0 }) => {
  return state;
});

//returns current state object of object - built in createStore method
console.log(store.getState());
