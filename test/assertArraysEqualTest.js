const assertArraysEqual = require('../assertArraysEqual');

//tests
assertArraysEqual([5, 6, 7, 8], [5, 6, 7, 8]);
assertArraysEqual([5, 6, 3, 8], [5, 6, 1, 8]);