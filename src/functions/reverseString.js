function reverseString(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse + string.charAt(i);
  }

  return reverse;
}

export default reverseString;
