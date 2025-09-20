// https://leetcode.com/problems/next-greater-element-i/description/

/**
 * Problem Description
 *
 * 2 arrays is given, nums1 and nums2
 * nums1 is the subset of nums2, means all the values found in nums1 must be found in nums2
 *
 * for index i element in nums1 we have to find greater element form right in nums2
 * otherwise -1
 * all elements in nums1 and nums2 are uniq
 *
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
 * Output: [-1,3,-1]
 *
 * index 0 element in nums1 is 4 .next greater element to the right in nums2 does not exist
 * so, -1 is the first result
 *
 * index 1 element in nums1 is 1. next greater element to the right in nums2 is 3
 * same way last result is -1
 */

/**
 * Solution
 *
 * we will store all the index of elements in nums2 in a map
 * loop the nums1, get the index for the element form map
 * than loop the rest of the index in nums2 to find the next greater element
 * add result to the result array
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const result = [];

  const nums2ItemToIndexMap = new Map();

  for (let i = 0; i < nums2.length; i++) {
    nums2ItemToIndexMap.set(nums2[i], i);
  }

  for (let j = 0; j < nums1.length; j++) {
    const currentItem = nums1[j];
    const indexInNums2 = nums2ItemToIndexMap.get(currentItem);

    let currentResult = -1;

    for (let k = indexInNums2 + 1; k < nums2.length; k++) {
      if (nums2[k] > currentItem) {
        currentResult = nums2[k];
        break;
      }
    }

    result.push(currentResult);
  }

  return result;
};
