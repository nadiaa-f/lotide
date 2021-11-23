const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Asseration Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑Asseration Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);