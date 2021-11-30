//returns the first item in the array
let head = function(firstElement) {
  return firstElement[0];
};
/*tests moved to headTest.js

assertEqual(head([5,6,7]), 5);
assertEqual([""]);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");*/

module.exports = head;
