// https://neetcode.io/problems/find-anagram-mappings/question

function anagramMappings(nums1, nums2) {
  const nums2NumberToIndexMap = new Map();

  for (let i = 0; i < nums2.length; i++) {
    nums2NumberToIndexMap.set(nums2[i], i);
  }

  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    const value = nums2NumberToIndexMap.get(nums1[i]);
    result.push(value);
  }

  return result;
}
