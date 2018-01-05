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
//possible to set default value and change variable name
const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}
