const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(num1) {
  return num1.slice(0);
};

assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(tail([]),);

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
