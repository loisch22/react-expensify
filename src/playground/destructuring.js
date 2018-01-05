console.log('destructuring');
//ES6 Object Destructuring
//Can pull off properties to own variable no need for person.name just name variable

const person = {
  age: 27,
  location: {
    city: 'Seattle',
    temp: 40
  }
};

//es6 Destructuring
//set default value for name if name exists use that, if it doesnt use the default 
const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}.`);

//simplify code by Destructuring
const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}
