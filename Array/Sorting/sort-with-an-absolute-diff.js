/***
 * Sort an array according to absolute difference with given value
 */

// Given an array of n distinct elements and a number x, arrange array elements according to the absolute difference with x, i. e., an element having minimum difference comes first, and so on.
// Note: If two or more elements are at equal distance arrange them in the same sequence as in the given array.
// Examples :

// Input : arr[] : x = 7, arr[] = {10, 5, 3, 9, 2}
// Output : arr[] = {5, 9, 10, 3, 2}
// Explanation:
// 7 - 10 = 3(abs)
// 7 - 5 = 2
// 7 - 3 = 4
// 7 - 9 = 2(abs)
// 7 - 2 = 5
// So according to the difference with X,
// elements are arranged as 5, 9, 10, 3, 2.

// Input : x = 6, arr[] = {1, 2, 3, 4, 5}
// Output :  arr[] = {5, 4, 3, 2, 1}

// Input : x = 5, arr[] = {2, 6, 8, 3}
// Output :  arr[] = {6, 3, 2, 8}

//NOT WORKING :(
function sortByAbsoluteDiffWithObject(arr, num) {
  // Math.abs(value - num)
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i] - num;
    obj[diff] = arr[i];
  }
  const sortedKeys = Object.keys(obj).sort((a, b) => b - a);
  const result = [];
  let index = 0;
  console.log(obj);

  console.log(sortedKeys);
  sortedKeys.forEach((key) => {
    result[index++] = obj[key];
  });
  return result;
}

function sortByAbsoluteDiff(array, num) {
  let index = 0;
  let result = [];
  let map = new Map();
  //Iterate over
  for (let index = 0; index < array.length; index++) {
    let diff = Math.abs(array[index] - num);
    map.set(array[index], diff);
  }
  // Sorting
  map = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));

  // Extract values and push that in Array
  for ([key, value] of map.entries()) {
    result[index++] = key;
  }
  return result;
}

console.log(sortByAbsoluteDiff([1, 2, 3, 4, 5], 6)); // 5, 4, 3, 2, 1
console.log(sortByAbsoluteDiff([2, 6, 8, 3], 5)); // 6, 3, 2, 8
