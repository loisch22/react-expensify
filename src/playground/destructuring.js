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
const {name, age} = person;

console.log(`${name} is ${age}.`);

//simplify code by Destructuring
const {city, temp} = person.location;

if (city && temp) {
  console.log(`It's ${temp} in ${city}.`);
}


// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// }
