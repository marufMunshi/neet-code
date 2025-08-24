// https://leetcode.com/problems/concatenation-of-array/

/**
 * Problem statement
 * an array will be given of length n
 * we have to concate the array to make it 2n
 */

/**
 * Solution approach
 * we have to loop through the array length of 2n
 * if the array is length 3, we have to make the array to 6 length
 * ans[i] == nums[i] and ans[i + n] == nums[i]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[i];
    result[i + nums.length] = nums[i];
  }

  return result;
};
