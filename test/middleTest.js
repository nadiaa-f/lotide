const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for []", () => {
    assert.strictEqual(middle([]),[]);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});
/*const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual');

//tests
assertArraysEqual(middle([]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]); //true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); //true
assertArraysEqual(middle([1, 2, 3, 5, 4]), [2]); //false*/