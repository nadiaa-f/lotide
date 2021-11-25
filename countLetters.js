const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
};

const countAllLetters = function(countString) {
  const letterCount = {};
  for (let letter of countString) {
    if (letterCount[letter]) {
      letterCount[letter] + 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};