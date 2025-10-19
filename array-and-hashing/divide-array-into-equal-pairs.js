// https://leetcode.com/problems/divide-array-into-equal-pairs/description/

/**
 * an array of numbers will be given, we have to make every element pair.
 * each element will be equal in the pair
 * if possible return true otherwise false
 */

/**
 * as we have to make each element into at least one pair. pair means 2 occurrence.
 * so, we have to count the occurrence of numbers in the array.
 *
 * after counting, if any of the occurrence of numbers is not divisible by 2
 *  we will understand that this number can not be made into pair.
 * we return false
 * other wise return true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const numsOccurrenceMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentValue = numsOccurrenceMap.get(nums[i]) || 0;

    numsOccurrenceMap.set(nums[i], currentValue + 1);
  }

  for (let [_, value] of numsOccurrenceMap) {
    if (value % 2 !== 0) {
      return false;
    }
  }

  return true;
};
