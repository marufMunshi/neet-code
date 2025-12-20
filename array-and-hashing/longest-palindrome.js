// https://leetcode.com/problems/longest-palindrome/

/**
 * Problem description
 *
 * a string will be given, we have to count maximum length of a palindrome from that string
 */

/**
 * Solution
 *
 * a palindrome string can be even and odd
 * if even string then every chars count at least 2
 * example "abba"
 *
 * if odd string, then 1 char can be odd
 * example "abcba"
 *
 * we will take even values from every chars and add them in the result.
 * now result length is less than original string, it means we can take one odd char and return result
 * else return the result with even count chars
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let result = 0;
  const charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const currentValue = (charMap.get(s[i]) || 0) + 1;
    charMap.set(s[i], currentValue);

    if (currentValue % 2 === 0) {
      result = result + 2;
    }
  }

  // we took all pair from chars, if still original string is bigger it means, it has multiple odd count char, so we will take one extra char
  return s.length > result ? result + 1 : result;
};
