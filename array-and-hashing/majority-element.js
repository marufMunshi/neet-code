// https://leetcode.com/problems/majority-element/description/

/**
 * Problem statement
 *
 * an array of nums will be given,  we have to find the majority element
 * the majority element is the element that appears more than ⌊n / 2⌋
 */

/**
 * we will store the element occurrence count in a map
 * when we found the majority element we will return from true
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const elementToCountMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentCount = elementToCountMap.get(nums[i]) || 0;

    if (currentCount + 1 > nums.length / 2) {
      return true;
    }

    elementToCountMap.set(nums[i], currentCount + 1);
  }

  return false;
};
