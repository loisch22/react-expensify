// must have .test.js - jest looks for this

const add = (a, b) => a + b + 1;

// global variables from jest
// test(name, code to run for test case aka arrow function) - sets up test case

test('should add two numbers', () => {
  const result = add(3, 4);
  // display error
  if (result !== 7) {
    throw new Error(`You added 4 and 3. The result was ${result}. Expected 7.`);
  }
});
