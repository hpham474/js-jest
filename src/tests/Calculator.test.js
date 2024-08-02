import Calculator from "../functions/Calculator.js";

// addition
test("calculate 1 + 5 to be 6", () => {
  const calc = new Calculator();
  expect(calc.add(1, 5)).toBe(6);
});

test("calculate 23 + 8 to be 31", () => {
  const calc = new Calculator();
  expect(calc.add(23, 8)).toBe(31);
});

// subtraction
test("calculate 4 - 9 to be -5", () => {
  const calc = new Calculator();
  expect(calc.subtract(4, 9)).toBe(-5);
});

test("calculate 15 - 4 to be 11", () => {
  const calc = new Calculator();
  expect(calc.subtract(15, 4)).toBe(11);
});

// divide
test("calculate 16 / 4 to be 4", () => {
  const calc = new Calculator();
  expect(calc.divide(16, 4)).toBe(4);
});

test("calculate 3 / 6 to be .5", () => {
  const calc = new Calculator();
  expect(calc.divide(3, 6)).toBe(0.5);
});

test("calculate 11 / 0 to be infinity", () => {
  const calc = new Calculator();
  expect(calc.divide(11, 0)).toBe(Infinity);
});

// multiply
test("calculate 24 * 3 to be 72", () => {
  const calc = new Calculator();
  expect(calc.multiply(24, 3)).toBe(72);
});

test("calculate 12 * 0 to be 0", () => {
  const calc = new Calculator();
  expect(calc.multiply(12, 0)).toBe(0);
});
