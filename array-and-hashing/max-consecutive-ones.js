// https://leetcode.com/problems/max-consecutive-ones/description/

/**
 * Problem statement
 *
 * an array is given with bianry inputs
 * we have to find maximum number of consequtive one's
 *
 * nums = [1,1,0,1,1,1]; result = 3
 */

/**
 * Solution
 *
 * result, currentCount variables will be initialize with 0
 * loop thorugh the array when 1 is found increase the currentMaxCount
 * otherwise compare and store currentCount with result
 * make currentCount 0 again
 * compare result and currentCount after the loop again to ensure latest value is in result
 * return result
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = 0;
  let currentCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      result = Math.max(result, currentCount);
      currentCount = 0;
    } else {
      currentCount = currentCount + 1;
    }
  }

  result = Math.max(result, currentCount);

  return result;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
