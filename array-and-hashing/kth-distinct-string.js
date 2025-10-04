// https://leetcode.com/problems/kth-distinct-string-in-an-array/description/

/**
 * An array of string and number k will be given
 * we have to return kth distinct string
 * meaning if array has 3 distinct and k is 2 we have return the 2nd distinct string
 * by order they appear in the array
 */

/**
 * Solution
 * first store characters and count in a map
 * only count 1 character is uniq,
 * then loop the map, and return kth uniq character
 * if not return empty string
 */

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const characterCountMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const currentCount = characterCountMap.get(arr[i]) || 0;

    characterCountMap.set(arr[i], currentCount + 1);
  }

  console.log(characterCountMap);

  let index = 0;

  for (const [key, value] of characterCountMap) {
    if (value === 1) {
      if (index === k - 1) {
        return key;
      }

      index++;
    }
  }

  return "";
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
