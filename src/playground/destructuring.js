//Object Destructuring

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


//Array destructuring

const address = [];

//destructure array - ordered list of variable names - matches name by position
//don't need to use all items from array - leave spaces for positions you don't want, then stop where you don't want the rest
//set defaults
const [, , state = 'Oregon'] = address;

console.log(`You are in ${state}`);

//problem: not clear what address[1]/[2] is
// console.log(`You are in ${address[1]} ${address[2]}`)
