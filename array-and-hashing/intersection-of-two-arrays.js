// https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const numsOneSet = new Set();
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    numsOneSet.add(nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (numsOneSet.has(nums2[i])) {
      result.push(nums2[i]);
      numsOneSet.delete(nums2[i]);
    }
  }

  return result;
};
