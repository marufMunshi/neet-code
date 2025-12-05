// https://neetcode.io/problems/largest-unique-number/solution

/**
 * Problem
 *
 * an array of integer numbers is given
 * we have to return the largest uniq number form the array
 * if no uniq number found we return -1
 */

/**
 * Solution
 *
 * first we have count the occurrence of the number in the array
 * if a number count is greater than 1 than it's a duplicate number
 *
 * we loop the array, every number count is check, if count is 1 than only compare for largest number
 * return the result
 */

function largestUniqueNumber(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const numberCountMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentValue = numberCountMap.get(nums[i]) || 0;

    numberCountMap.set(nums[i], currentValue + 1);
  }

  let result = -1;

  for (let i = 0; i < nums.length; i++) {
    const currentValue = numberCountMap.get(nums[i]);

    if (currentValue === 1) {
      result = Math.max(result, nums[i]);
    }
  }

  return result;
}
