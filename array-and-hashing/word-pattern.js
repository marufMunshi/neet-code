// https://leetcode.com/problems/word-pattern/

/**
 * Problem description
 * a pattern in string given
 * and a string of words are given
 * if the pattern can be mapped to words of the string return true else false
 *
 * example:
 * pattern = "abba", s = "dog cat cat dog"
 * output : true, as a mapped to dog and b mapped to cat
 * and pattern length and splitted length words length are equal
 */

/**
 * Solution
 *
 * first we split the string and make words array
 * if the words array length and pattern length are not equal return false
 *
 * then we create two hashmap
 * 1. pattern character to word
 * 2. words to pattern character
 *
 * start a loop for the length of the pattern
 * for the i index patternChar patternCharToWordMap is undefined and
 * for the same index word wordToPatternMap is undefined we add values to both of the hashmap
 * and continue to next iteration
 *
 * if values are not undefined than we check
 * if patternChar not equal to wordToPatternMap value
 * or patternCharToWordMap value not equal to word
 * if either of this condition is true we return false
 *
 * after the loop we return true
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternCharToWordMap = new Map();
  const wordToPatternMap = new Map();

  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const currentChar = pattern[i];
    const currentPattenValue = patternCharToWordMap.get(currentChar);

    const currentWord = words[i];
    const currentWordValue = wordToPatternMap.get(currentWord);

    if (currentPattenValue === undefined && currentWordValue === undefined) {
      patternCharToWordMap.set(currentChar, currentWord);
      wordToPatternMap.set(currentWord, currentChar);

      continue;
    }

    if (
      currentPattenValue !== currentWord ||
      currentWordValue !== currentChar
    ) {
      return false;
    }
  }

  return true;
};
