//ES6 Object Destructuring

// console.log('destructuring');
//
// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Seattle',
//     temp: 40
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
//
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);


//ES6 Array destructuring

// const address = ['1299 S James Street', 'Seattle', 'Washington', '19192'];
// const [, , state = 'Oregon'] = address;
// console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , mediumPrice] = item;

console.log(`A medium ${name} costs ${mediumPrice}`);
