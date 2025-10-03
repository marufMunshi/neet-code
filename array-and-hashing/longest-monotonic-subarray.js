// https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/

/**
 * an array of nums will be given,
 * we have to find the longest strictly increasing subarray
 * and longest strictly decreasing subarray
 * than return whichever is the longest
 */

/**
 * Solution
 *
 * we have to find longest strictly increasing subarray first
 * than longest strictly decreasing subarray
 * compare and return
 * this brute force
 */

// [1,4,3,3,2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  if (nums.length <= 1) return nums.length;

  let maxIncreasingSubArray = 1;
  let maxDecreasingSubArray = 1;

  let startInc = 0;
  for (let end = 1; end < nums.length; end++) {
    if (nums[end] > nums[end - 1]) {
      maxIncreasingSubArray = Math.max(
        maxIncreasingSubArray,
        end - startInc + 1
      );
    } else {
      startInc = end;
    }
  }

  let startDec = 0;
  for (let end = 1; end < nums.length; end++) {
    if (nums[end] < nums[end - 1]) {
      maxDecreasingSubArray = Math.max(
        maxDecreasingSubArray,
        end - startDec + 1
      );
    } else {
      startDec = end;
    }
  }

  return Math.max(maxIncreasingSubArray, maxDecreasingSubArray);
};

// console.log(longestMonotonicSubarray([1, 4, 3, 3, 2]));
console.log(longestMonotonicSubarray([1, 0, -1]));
