// https://leetcode.com/problems/maximum-ascending-subarray-sum/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let maximumSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentSum = currentSum + nums[i];
      maximumSum = Math.max(maximumSum, currentSum);
    } else {
      currentSum = nums[i];
      windowStart = i;
    }
  }

  return maximumSum;
};
