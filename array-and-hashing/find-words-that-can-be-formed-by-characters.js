// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/

/**
 * Problem description
 * an array of strings "words" is given and a string "chars" is given
 * return the total length of good strings from the words array
 * a good string is formed by characters form the chars and each character can be used once
 */

/**
 * Solution
 * as we have to check the words string to chars string we need to store chars string in a map
 *
 * after that we have to run a nested to loop to check each character
 *
 * now, we need map for each word, because we have to check the count of each character also.
 * if word is "aaa", and chars is "aa" this is not a good string
 * to check this kind of scenario, we need a map for each word
 * if character count is > chars character count than it's not a good string
 *
 * sum the length of good string and return
 */

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let result = 0;
  const charsMap = new Map();

  for (let i = 0; i < chars.length; i++) {
    const currentValue = charsMap.get(chars[i]) || 0;

    charsMap.set(chars[i], currentValue + 1);
  }

  for (const word of words) {
    let goodWord = true;
    const currentWordMap = new Map();

    for (let i = 0; i < word.length; i++) {
      const currentValue = currentWordMap.get(word[i]) || 0;
      currentWordMap.set(word[i], currentValue + 1);

      const currentCharValue = charsMap.get(word[i]) || 0;

      if (currentValue + 1 > currentCharValue) {
        goodWord = false;
        break;
      }
    }

    if (goodWord) {
      result = result + word.length;
    }
  }

  return result;
};
