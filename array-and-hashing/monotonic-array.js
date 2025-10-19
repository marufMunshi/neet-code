// https://leetcode.com/problems/monotonic-array/description/

/**
 * an array is monotonic if it's sorted in increasing or decreasing manner
 * we have return true if it's monotonic or false
 */

/**
 * if we loop the items twice for increasing or decreasing we will get the result easily
 *
 * we can also do that in one pass.
 * if nums[i] < nums[i - 1] is true -> monotone increasing is false
 * if nums[i] > nums[i - 1] is true -> monotone decreasing is false
 *
 * if either of the true we return true or we return false
 * -----------------
 * here we are marking an array monotone increasing or decreasing false,
 * this is reverting the problem, and this type solution can be used for many problems
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let monotoneIncreasing = true;
  let monotoneDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      monotoneIncreasing = false;
    }

    if (nums[i] > nums[i - 1]) {
      monotoneDecreasing = false;
    }
  }

  if (monotoneIncreasing || monotoneDecreasing) {
    return true;
  }

  return false;
};
