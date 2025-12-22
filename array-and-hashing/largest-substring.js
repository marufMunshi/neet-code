// https://leetcode.com/problems/largest-substring-between-two-equal-characters/

/**
 * Problem description
 *
 * find the longest substring between two equal character, excluding the equal chars
 * example : "avbfsdaed", so, "vbfsd" is the longest substring
 */

/**
 * Solution approach
 *
 * store character in a map with index
 * and check if character is already exist
 * if exist get the substring length and store max length in the result
 * return result
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const charToIndexMap = new Map();
  let result = -1;

  for (let i = 0; i < s.length; i++) {
    const currentValue = charToIndexMap.get(s[i]);

    if (currentValue !== undefined) {
      result = Math.max(result, i - currentValue - 1);

      continue;
    }

    charToIndexMap.set(s[i], i);
  }

  return result;
};
