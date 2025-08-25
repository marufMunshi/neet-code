// https://leetcode.com/problems/valid-anagram/description/

/**
 * Problem statement
 *
 * two strings will be given
 * we have to return true if strings are anagram otherwise false
 */

/**
 * Solution approach
 *
 * we will stroe characters and frequency in a map for first string
 * after that we will check 2nd string character with the map
 * if all the character and frequency matches it's a anagram
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const characterFrequencyMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const existingValue = characterFrequencyMap.get(char) || 0;

    characterFrequencyMap.set(char, existingValue + 1);
  }

  for (let j = 0; j < t.length; j++) {
    const char = t[j];

    if (characterFrequencyMap.has(char) === false) {
      return false;
    }

    const existingValue = characterFrequencyMap.get(char);

    if (existingValue - 1 === 0) {
      characterFrequencyMap.delete(char);
    } else {
      characterFrequencyMap.set(char, existingValue - 1);
    }
  }

  return true;
};

console.log(isAnagram("ab", "a"));
