//User function Template for javascript

/**
 * searchEle
 * @param {number[]} a
 * @param {number} x
 * @return {boolean}
 *
 * insertEle
 * @param {number} str
 * @param {number} y
 * @param {number} yi
 * @return {boolean}
 *
 * deleteEle
 * @param {number} str
 * @param {number} z
 * @return {boolean}
 */

class Solution {
  searchEle(a, x) {
    if (this.getElementIndex(a, x)) return true;
    return false;
  }

  insertEle(a, y, yi) {
    a.splice(yi, 1, y);
    console.log(a);

    return true;
  }

  deleteEle(a, z) {
    const index = this.getElementIndex(a, z);
    if (index !== -1) {
      a.splice(index, 1);
      return true;
    }
    return false;
  }
  getElementIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) if (arr[i] === element) return i;
    return -1;
  }
}

const arr = [801, 661, 730, 878, 305, 320, 736, 444, 0, 522];
const s = new Solution();
console.log(arr);
