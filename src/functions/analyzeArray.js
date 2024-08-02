function analyzeArray(array) {
  let min = array[0];
  let max = array[0];
  let sum = 0;
  const length = array.length;

  for (const num of array) {
    if (min > num) {
      min = num;
    }
    if (max < num) {
      max = num;
    }
    sum = sum + num;
  }

  const avg = sum / length;

  return { average: avg, min: min, max: max, length: length };
}

export default analyzeArray;
