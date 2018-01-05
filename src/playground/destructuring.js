console.log('destructuring');
//ES6 Object Destructuring
//Can pull off properties to own variable no need for person.name just name variable

const person = {
  name: 'Andrew',
  age: 27,
  location: {
    city: 'Seattle',
    temp: 40
  }
};

//es6 Destructuring
//{value we want to grab} = object we want to grab from
const {name, age} = person;

//simple way - not scalable since have to repeat for all
// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}.`);
