// https://leetcode.com/problems/remove-element/description/

/**
 * Problem statement
 *
 * an array of integer numbers and a target number will be given
 * we have to move the target number at the end of the array and return how many number have been moved
 *
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 */

/**
 * Solution approach 1 (not valid)
 *
 * we have to loop the nums array, when we find the target number we have to loop the nums again
 * to move the target num at the end
 * same target num can be found multiple times adjacently
 */

/**
 * Solution approach 2
 *
 * goal is to move all the target values to the end of the array
 * so, first solution was to move the target values itself, and that caused some error
 *
 * if we only move the non-target values at the start of the array we will also achieve the result
 * but in a reverse way
 * most of the time reverse way is the good solution
 *
 * we will have two pointer
 * pointer k will be tracking the non target values swapping and pointer i will be looping the array
 *
 * k will be returned
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      const temp = nums[k];
      nums[k] = nums[i];
      nums[i] = temp;
      k++;
    }
  }

  return k;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 2));
