const eqArrays = require('./eqArrays');
/*copied from eqArrays.js
takes in two arrays and returns true or false, based on a perfect match.*/
/*const eqArrays = function(array1, array2) {
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
This function is now being called using require*/

/*takes in two arrays and console.log an appropriate message to the console.*/
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo))
    return console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  else return console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};
/*tests moved to assertArraysEqualTest.js
assertArraysEqual([5, 6, 7, 8], [5, 6, 7, 8]);
assertArraysEqual([5, 6, 3, 8], [5, 6, 1, 8]);*/

module.exports = assertArraysEqual;