import analyzeArray from "../functions/analyzeArray.js";

test("inputs [1,8,3,4,2,6] expects avg: 4, min: 1, max: 8, len: 6", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("inputs [16,36,2,7,1] expects avg: 13, min: 2, max: 36, len: 5", () => {
  expect(analyzeArray([16, 36, 2, 7, 4])).toEqual({
    average: 13,
    min: 2,
    max: 36,
    length: 5,
  });
});

test("inputs [11,3,11,4,7,8,5,3] expects avg: 6.5, min: 3, max: 11, len: 8", () => {
  expect(analyzeArray([11, 3, 11, 4, 7, 8, 5, 3])).toEqual({
    average: 6.5,
    min: 3,
    max: 11,
    length: 8,
  });
});
