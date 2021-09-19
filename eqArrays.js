const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let correct = true;

  if (array1.length !== array2.length) {
    correct = false;
  }
  for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
      correct = false;
    }
  }

  return correct;

};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS