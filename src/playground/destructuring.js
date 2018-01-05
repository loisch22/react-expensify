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
const { name, age } = person;

console.log(`${name} is ${age}.`);

//simplify code by Destructuring
//rename properties
const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}
