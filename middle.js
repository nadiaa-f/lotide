const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return "false";
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo))
    return console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  else return console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};

const middle = function(nadia) {
  let middleIndex = Math.floor(nadia.length / 2);

  if (nadia.length < 3) {
    return [];
  } else if (nadia.length % 2 === 1) { // odd one out
    return [nadia[middleIndex]];
  } else {
    return [nadia[middleIndex], nadia[middleIndex + 1]];
  }
};

assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[4,5]);