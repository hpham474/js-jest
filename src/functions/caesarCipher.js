function caesarCipher(string, shiftCount) {
  let cipher = "";
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      cipher = cipher + shift(char, shiftCount).toUpperCase();
    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      cipher = cipher + shift(char, shiftCount).toLowerCase();
    } else {
      cipher = cipher + string.charAt(i);
    }
  }

  return cipher;
}

function shift(char, shiftCount) {
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const charNum = getPlaceInAlpha(char, alpha);
  if (charNum + shiftCount >= 26) {
    return alpha[charNum + shiftCount - 26];
  } else {
    return alpha[charNum + shiftCount];
  }
}

function getPlaceInAlpha(character, alpha) {
  let count = 0;
  for (let i = 0; i < alpha.length; i++) {
    if (alpha[i] === character.toLowerCase()) {
      return count;
    }
    count++;
  }
}

export default caesarCipher;
