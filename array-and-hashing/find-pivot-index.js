// https://leetcode.com/problems/find-pivot-index/

/**
 * Problem
 * an array integers will be given, we have to find the pivot index or return -1
 * pivot index such that index, sum of all the numbers to the left and sum of all the right numbers are equal
 * index value is not calculated
 */

/**
 * Solution
 * first get all the all the numbers sum -> totalSum
 * now we will calculate currentSum by looping again
 * if previousSum === totalSum - currentSum
 * than we got our pivot index
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum = totalSum + nums[i];
  }

  let currentSum = 0;
  let previousSum = 0;

  for (let j = 0; j < nums.length; j++) {
    previousSum = currentSum;
    currentSum = currentSum + nums[j];

    if (previousSum === totalSum - currentSum) {
      return j;
    }
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
