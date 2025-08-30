// https://leetcode.com/problems/length-of-last-word/description/

/**
 * Problem statement
 *
 * given a string contains with words and spaces
 * we to find the length of the last word
 * string consists of only English letters and spaces
 * there will be at least one word
 * example: "   fly me   to   the moon  "
 * result: last word is "moon", so the length is 4
 */

/**
 * Solution
 *
 * we will loop the string form end
 * when any non space character is found, we will start counting in another loop
 * when we found space or string looping is finished, we will return the result
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      let j = i;

      while (j >= 0) {
        if (s[j] === " ") {
          return i - j;
        }

        j--;
      }

      return i - j;
    }
  }

  return 0;
};

console.log(lengthOfLastWord("hi"));
