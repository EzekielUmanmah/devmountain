const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract,
} = require('./functions.js');

describe('test the functions.js file', () => {
  test('returnTwo() returns 2', () => expect(returnTwo()).toEqual(2));

  test('greeting() returns a greeting', () => {
    const james = greeting('James');
    expect(james).toEqual('Hello, James.');

    const jill = greeting('Jill');
    expect(jill).toBe('Hello, Jill.');
  });
});

describe('Math functions', () => {
  test('add() returns the sum of two numbers', () => {
    const test1 = add(1, 2); // 3
    expect(test1).toBe(3);

    const test2 = add(5, 9); // 14
    expect(test2).toBe(14);
  });

  test('subtract() returns the difference of two numbers', () => {
    const test1 = subtract(2, 3);
    expect(test1).toBe(-1);

    const test2 = subtract(1, 1);
    expect(test2).toBe(0);
  });

  test('divide() returns the dividend of two numbers', () => {
    const test1 = divide(4, 2);
    expect(test1).toBe(2);

    const test2 = divide(10, 5);
    expect(test2).toBe(2);
  });

  test('multiply() returns the product of two numbers', () => {
    const test1 = multiply(2, 3);
    expect(test1).toBe(6);

    const test2 = multiply(10, 10);
    expect(test2).toBe(100);
  });
});
