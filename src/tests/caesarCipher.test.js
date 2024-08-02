import caesarCipher from "../functions/caesarCipher.js";

test("inputs 'xyz' and shifts by 3 expects 'abc'", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("inputs 'HeLLo' and shift by 3 expects 'KhOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("inputs 'Hello, World!' and shifts by 3 expects 'Khoor, Zruog!'", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
