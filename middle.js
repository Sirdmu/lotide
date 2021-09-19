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

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ Arrays are equal!`);
  } else {
    console.log(`❌❌ Arrays are NOT equal!`);
  }

};

const middle = function(array) {

  const middleArr = [];

  if (array.length <= 2) {
    return middleArr;
  } else {

    let middleIndex = Math.ceil(array.length / 2) - 1;

    if (array.length % 2 !== 0) {
      middleArr.push(array[middleIndex]);
    } else {
      middleArr.push(array[middleIndex]);
      middleArr.push(array[middleIndex + 1]);
    }
    return middleArr;
  }
};

//test code
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]