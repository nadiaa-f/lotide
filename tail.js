/*returns the "tail" of an array: everything except for the first item (head) of the provided array*/
const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};
/*tests moved to tailTest.js
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words1 = ["Yo Yo"];
tail(words1);
assertEqual(words1.length, 1);

const words0 = [];
tail(words0);
assertEqual(words0.length, 0);*/
module.exports = tail;