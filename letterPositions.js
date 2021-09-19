const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {  //if the true (two arrays are equal)
    console.log(`✅✅ Arrays are equal!`);
  } else {
    console.log(`❌❌ rrays are NOT equal!`);
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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    if (!results[sentence[i]]) {  //if the letter is not in the objet
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

console.log(assertArraysEqual(letterPositions("hello").e, [1]));