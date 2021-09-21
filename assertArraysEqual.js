const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
    console.log(`✅✅ Arrays are equal!`);
  } else {
    console.log(`❌❌ rrays are NOT equal!`);
  }

};

module.export = assertArraysEqual;