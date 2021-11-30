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

const takeUntil = function(array, callback) {
  let stored = [];

  for (let word of array) {
    if (!callback(word))
      stored.push(word);
    else
      break;
  }
  return stored;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);