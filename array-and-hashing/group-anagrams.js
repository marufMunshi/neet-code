// https://leetcode.com/problems/group-anagrams/description/

/**
 * Problem statement
 *
 * an array of string will be given
 * we have to group the anagrams
 *
 *
 */

/**
 * Solution approach
 *
 * we will sort every string, so all the anagrams will be same text
 * than we will group them
 *
 * as input only contains lower case english letters,
 *  we can use bucket sort
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = new Map();

  /**
   * @param {string} str
   * @return {string}
   */
  function sortString(str) {
    const charBucket = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ];

    for (let i = 0; i < str.length; i++) {
      const index = str[i].charCodeAt() - 97; // 97 is charCodeAt for "a"

      charBucket[index] = charBucket[index] + 1;
    }

    return charBucket.join(",");
  }

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];

    const sortedWord = sortString(word);

    if (result.has(sortedWord)) {
      const values = result.get(sortedWord);
      values.push(word);
    } else {
      result.set(sortedWord, [word]);
    }
  }

  return Array.from(result.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"]));
