// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * Problem description
 *
 * a string is given, we have to find the first non repeating character index
 * if not found, return -1
 */

/**
 * Solution approach
 *
 * store character occurrence and index in a map
 * loop the item form the map, return the index of first character which value is 1
 *
 * other wise return -1
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const charCountMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const { value = 0 } = charCountMap.get(s[i]) || {};

    const obj = {
      value: value + 1,
      index: i,
    };

    charCountMap.set(s[i], obj);
  }

  for (const [key, obj] of charCountMap) {
    const { value, index } = obj;

    if (value === 1) {
      return index;
    }
  }

  return -1;
};
