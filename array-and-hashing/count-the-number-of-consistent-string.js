// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

/**
 * Problem description
 *
 * an array of strings words and a string allowed is given
 * we have to return the number of consistent string form the words array
 *
 * A string is consistent if all the characters in the string appear in the allowed string
 */

/**
 * Solution approach
 *
 * make a map for allowed string
 *
 * run a nested loop to check each character
 *
 * if a character is not present in allowed map, this is not consistent string
 *
 * return the consistent string count
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const charsMap = new Map();
  let result = 0;

  for (let i = 0; i < allowed.length; i++) {
    charsMap.set(allowed[i], 1);
  }

  for (const word of words) {
    let consistentWord = true;

    for (let i = 0; i < word.length; i++) {
      if (charsMap.has(word[i]) === false) {
        consistentWord = false;
        break;
      }
    }

    if (consistentWord) {
      result++;
    }
  }

  return result;
};
