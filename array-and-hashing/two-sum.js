// https://leetcode.com/problems/two-sum/

/**
 * Problem statement
 * ar array of numbers and a target is given
 * we have to return the indices for the target
 * [2,7,11,15], target = 9
 * result [0,1]
 */

/**
 * well we can solve this with O(n^2) but we need to do it with O(n)
 * initiaze a map with empty object
 * we will loop the array
 * subtract current item form target
 * if the complement is found in the map we will return the result
 * otherwise we will store the number in the map
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numberToIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    const complementIndex = numberToIndexMap.get(complement);

    if (complementIndex === undefined) {
      numberToIndexMap.set(currentNum, i);
    } else {
      return [complementIndex, i];
    }
  }

  return [];
};
