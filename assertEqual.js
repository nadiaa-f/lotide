/*compares the two values it takes in and print out a message telling us if they match or not*/
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
};
/*tests moved to assertEqualtest.js

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/

module.exports = assertEqual;