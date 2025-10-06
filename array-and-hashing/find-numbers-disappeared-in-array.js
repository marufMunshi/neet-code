// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * Problem
 * an array of numbers will be given with length n
 * we have to find all the disappeared numbers form the array
 * numbers will be in the range of 1 to n
 */

/**
 * Solution
 *
 * [4, 3, 2, 7, 8, 2, 3, 1] as in this array we can number 5,6 are missing
 * but 3 and 2 are duplicate to compensate the length
 * first we have to move all the numbers to their respected position
 *
 * in 0 index number is 4, but it should be in index 3
 * so, we will swap this with index 3 number
 * now 0 index number is 7, again we swap this with index 6
 * we will swap the same index as long as the correct number does not appear
 * it's called cyclic sorting
 * after sorting nums array will be [1,2,3,4,2,3,7,8]
 * if we only check the nums in the index with what will be the value we will get our result
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const result = [];

  let i = 0;

  while (i < nums.length) {
    let correctPosition = nums[i] - 1;

    if (nums[i] !== nums[correctPosition]) {
      const temp = nums[correctPosition];
      nums[correctPosition] = nums[i];
      nums[i] = temp;
    } else {
      i++;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      result.push(j + 1);
    }
  }

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
