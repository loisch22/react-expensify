// must have .test.js - jest looks for this

const add = (a, b) => a + b;

// global variables from jest
// test(name, code to run for test case aka arrow function) - sets up test case

test('should add two numbers', () => {
  const result = add(3, 4);
  // assertion
  expect(result).toBe(7);
});
