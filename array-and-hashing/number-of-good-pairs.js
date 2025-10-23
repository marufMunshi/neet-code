// https://leetcode.com/problems/number-of-good-pairs/description/

/**
 * Problem description
 *
 * an array of numbers will be given
 * we have to return how many good pairs can be made from the items of the array
 * a good pair is same number but different index.
 */

/**
 * Solution approach
 *
 * from the definition of good pairs
 * we know that same number need to be present in the array twice to make a good pair
 * so, we will store the occurrence of numbers in a map
 *
 * now from the map we know that how many numbers have equal or more than 2 occurrence
 * there is a math for counting pair from given number
 * (n * ( n - 1)) / 2
 *
 * we will count the pairs if occurrence >= 2 and add that in the result
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const numsOccurrenceMap = new Map();
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentValue = numsOccurrenceMap.get(nums[i]) || 0;

    numsOccurrenceMap.set(nums[i], currentValue + 1);
  }

  numsOccurrenceMap.forEach((value, key) => {
    if (value >= 2) {
      result = result + (value * (value - 1)) / 2;
    }
  });

  return result;
};
