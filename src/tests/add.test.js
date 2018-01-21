const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return greeting with name', () => {
  const result = generateGreeting('Andrew');

  expect(result).toBe('Hello Andrew!');
});

test('should return greeting with name', () => {
  const result = generateGreeting();

  expect(result).toBe('Hello Anonymous!');
});