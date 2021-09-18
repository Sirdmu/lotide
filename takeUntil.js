const words = ["ground", "control", "to", "major", "tom"];

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const results1 = takeUntil(words, word => word[0]);
console.log(assertEqual(results1));