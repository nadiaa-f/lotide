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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;

  for (let o1city in object1) {
    for (let o2city in object2) {
      if (o1city === o2city && (typeof object1[o1city] === "object" && typeof object2[o2city] === "object")) {
        if (!eqArrays(object1[o1city], object2[o2city])) {
          return false;
        }
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (actual === expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  } // Implement me!
};


const obj1 = {city: "Edmonton", province: "Alberta"};
const obj2 = {city: "Regina", province: "Alberta"};
const obj3 = {province:"Alberta", city: "Edmonton"};

//test
assertObjectsEqual(eqObjects(obj1, obj1), true);
assertObjectsEqual(eqObjects(obj1, obj2), false);
assertObjectsEqual(eqObjects(obj1, obj3), true);

//Write assertEqual tests to ensure that they are failing
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

//Write out the assertEqual tests to ensure that they are failing

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false
