// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/

/**
 * Problem description
 *
 * an array of positive numbers given in non-decreasing manner
 * we have to find out that if the array was originally sorted and rotated
 */

/**
 * if an array is sorted in non-decreasing order, previous number will be always less than the next number
 * so, when a sorted array is rotated, there will be one drop in this condition where the rotation happen
 * if we count the drop we can solve the issue
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let dropCount = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      dropCount++;
    }
  }

  if (nums[nums.length - 1] > nums[0]) {
    dropCount++;
  }

  return dropCount <= 1;
};
