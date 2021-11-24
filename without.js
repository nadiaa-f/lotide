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
assertArraysEqual([5, 6, 7, 8], [5, 6, 7, 8]);
assertArraysEqual([5, 6, 3, 8], [5, 6, 1, 8]);

const without = function(arr, itemsToRemove) {
  const newArray = [];
for (let i = 0; i < arr.length; i++) {
    if(!itemsToRemove.includes(arr[i])) {
      newArray.push(source[i])
    }
  }
}
return arr;