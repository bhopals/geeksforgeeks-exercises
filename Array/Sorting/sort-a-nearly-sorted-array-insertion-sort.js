/**
 * Sort a nearly sorted (or K sorted) array
 */

// Given an array of n elements, where each element is at most k away from its target position, devise an algorithm that sorts in O(n log k) time. For example, let us consider k is 2, an element at index 7 in the sorted array, can be at indexes 5, 6, 7, 8, 9 in the given array.

// Examples:

// Input : arr[] = {6, 5, 3, 2, 8, 10, 9}
//             k = 3
// Output : arr[] = {2, 3, 5, 6, 8, 9, 10}

// Input : arr[] = {10, 9, 8, 7, 4, 70, 60, 50}
//          k = 4
// Output : arr[] = {4, 7, 8, 9, 10, 50, 60, 70}

// Recommended Practice: Nearly Sorted Array!

function insertionSort(arr) {
  let j;
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionSort([6, 5, 3, 2, 8, 10, 9]));
