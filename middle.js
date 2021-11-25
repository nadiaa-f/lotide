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

const assertArrayEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
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

assertArrayEquals(middle([]),[]);
assertArrayEquals(middle([1]),[]);
assertArrayEquals(middle([1, 2, 3]),[2]);
assertArrayEquals(middle([1, 2, 3, 4, 5, 6]),[4,5]);