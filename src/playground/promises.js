const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Andrew',
      age: 26
    });
    // reject('Something went wrong');
  }, 5000);
});
console.log('before');

promise.then((resolveData) => {
  console.log('1', resolveData);

  return 'some data'
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

// alternative to promise syntax - then() takes 2 arguments i.e. 2 functions -- more confusing looking tho so go with above
// promise.then((resolveData) => {
//   console.log('1', resolveData);
// }, (error) => {
//   console.log('error: ', error);
// });


console.log('after');
