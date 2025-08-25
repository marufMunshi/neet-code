// https://leetcode.com/problems/contains-duplicate/description/

/**
 * Problem statement
 *
 * an interger numbers array will be given
 * we have to return true if array contains duplicate items
 * otherwise false
 */

/**
 * Solution
 *
 * while looping the array we will store the item in map and the values will be frequency
 * if item is found we will return true
 * otherwise false
 *
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numberFrequencyMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (numberFrequencyMap.has(number)) {
      return true;
    } else {
      numberFrequencyMap.set(number, 1);
    }
  }

  return false;
};
