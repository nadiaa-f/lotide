const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let name in obj) {
    if (callback(obj[name]))
    return name;
  }
};

const test1 = findKey({
"Blue Hill": { stars: 1 },
"Akaleri":   { stars: 3 },
"noma":      { stars: 2 },
"elBulli":   { stars: 3 },
"Ora":       { stars: 2 },
"Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(test1, "noma");