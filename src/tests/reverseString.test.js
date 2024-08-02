import reverseString from "../functions/reverseString.js";

test("inputs 'string' expects 'gnirts'", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("inputs 'hello world' expects 'dlrow olleh'", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("inputs 'Test Input' expects 'tupnI tseT'", () => {
  expect(reverseString("Test Input")).toBe("tupnI tseT");
});
