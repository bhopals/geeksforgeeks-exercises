/****
 * https://www.geeksforgeeks.org/alternative-sorting/?ref=lbp
 *
 * Alternative Sorting
 *
 * Given an array of integers, print the array in such a way that the first element is first maximum and second element is first minimum and so on.
 * Examples :
 * Input : arr[] = {7, 1, 2, 3, 4, 5, 6}
 * Output : 7 1 6 2 5 3 4
 * Input : arr[] = {1, 6, 9, 4, 3, 7, 8, 2}
 * Output : 9 1 8 2 7 3 6 4
 *
 */

// Time Complexity: O(n Log n)
// Auxiliary Space : O(1)
function alternativeSorting(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  let i = 0;
  j = arr.length - 1;
  while (i <= j) {
    if (i !== j) {
      result.push(arr[j]);
    }
    result.push(arr[i]);

    i++;
    j--;
  }
  return result;
}

console.log(alternativeSorting([7, 1, 2, 3, 4, 5, 6])); // 7 1 6 2 5 3 4
console.log(alternativeSorting([1, 6, 9, 4, 3, 7, 8, 2])); // 9 1 8 2 7 3 6 4
console.log(alternativeSorting([1, 12, 4, 6, 7, 10, 2])); // 12 1 10 2 7 4 6
