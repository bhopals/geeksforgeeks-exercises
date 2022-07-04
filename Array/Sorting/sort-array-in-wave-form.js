/**
 * Sort an array in wave form
 */
// Given an unsorted array of integers, sort the array into a wave like array. An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..

// what is a wave array?

// well, you have seen waves right? how do they look? if you will form a graph of them it would be some in some up-down fashion.

// that is what you have to do here, you are supposed to arrange numbers in such a way that if we will form a graph it will be in an up-down fashion rather than a straight line.

// Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
// Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80} OR
//                  {20, 5, 10, 2, 80, 6, 100, 3} OR
//                  any other array that is in wave form

//                  here you can see {10, 5, 6, 2, 20, 3, 100, 80} first element is larger than the second and the same
//                  thing is repeated again and again. large element - small element-large element -small element
//                  and so on .
//                  it can be small element-larger element - small element-large element -small element too.
//                  all you need to maintain is the up-down fashion which represents a wave.
//                   there can be multiple answers.

//  Input:  arr[] = {20, 10, 8, 6, 4, 2}
//  Output: arr[] = {20, 8, 10, 4, 6, 2} OR
//                  {10, 8, 20, 2, 6, 4} OR
//                  any other array that is in wave form

//  Input:  arr[] = {2, 4, 6, 8, 10, 20}
//  Output: arr[] = {4, 2, 8, 6, 20, 10} OR
//                  any other array that is in wave form

//  Input:  arr[] = {3, 6, 5, 10, 7, 20}
//  Output: arr[] = {6, 3, 10, 5, 20, 7} OR
//                  any other array that is in wave form

// Time Complexity: O(nlogn)
// Auxiliary Space: O(1)
function sortInWave1(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i = i + 2) {
    if (arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
}

// Time Complexity: O(n)
// Auxiliary Space: O(1)
function sortInWave2(arr) {
  for (let i = 1; i < arr.length; i = i + 2) {
    // If current even element
    // is smaller than previous
    if (i > 0 && arr[i - 1] > arr[i])
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];

    // If current even element
    // is smaller than next
    if (i < arr.length - 1 && arr[i] < arr[i + 1])
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
}

console.log(sortInWave1([20, 10, 8, 6, 4, 2, 7])); // [4, 2, 7, 6, 10, 8, 20];
console.log(sortInWave1([2, 4, 6, 8, 10, 20])); // [ 4, 2, 8, 6, 20, 10 ]
console.log(sortInWave1([3, 6, 5, 10, 7, 20])); // [ 5, 3, 7, 6, 20, 10 ]
console.log(sortInWave1([10, 90, 49, 2, 1, 5, 23])); // [2, 1, 10, 5, 49, 23, 90];
console.log("DIWARR>>>");
console.log(sortInWave2([20, 10, 8, 6, 4, 2, 7])); // [4, 2, 7, 6, 10, 8, 20];
console.log(sortInWave2([2, 4, 6, 8, 10, 20])); // [ 4, 2, 8, 6, 20, 10 ]
console.log(sortInWave2([3, 6, 5, 10, 7, 20])); // [ 5, 3, 7, 6, 20, 10 ]
console.log(sortInWave2([10, 90, 49, 2, 1, 5, 23])); // [2, 1, 10, 5, 49, 23, 90];
