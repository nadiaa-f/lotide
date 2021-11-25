//assertEqual code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}; //empty object
  for (const item of allItems) {
    if (itemsToCount[item]) { //only count specific items
      if (results[item]) {
        results[item] += 1; //add
      } else { //anything else make it
        results[item] = 1;
      }
    }
  }
  return results;
};

//random array to work with
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",//undefined, bc called as false
  "Fang", //1
  "Kavith",//undefined, no key in object
  "Jason", //1
  "Salima",//undefined, no key in object
  "Fang",//2
  "Joe"//undefined, no key in object
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//checking
assertEqual(result1["Jason"], 1); //true
assertEqual(result1["Karima"], undefined); //undefined
assertEqual(result1["Fang"], 2); //true
assertEqual(result1["Agouhanna"], undefined);//true
