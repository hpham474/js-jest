import capitalize from "../functions/capitalize.js";

test("inputs 'string' expects 'String'", () => {
  expect(capitalize("string")).toBe("String");
});

test("inputs 'hello world' expects 'Hello world'", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("inputs 'test Input' expects 'Test Input'", () => {
  expect(capitalize("test Input")).toBe("Test Input");
});
