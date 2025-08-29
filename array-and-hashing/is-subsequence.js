// https://leetcode.com/problems/is-subsequence/description/

/**
 * Problem Statement
 *
 * two string is given, s and t.
 * we have to find if s is a subsequence of t
 * return true if subsequence otherwise false
 *
 * example: "abc" is subsequence of "ahbgdc"
 */

/**
 * Solution
 * we will loop through s string
 * inside the loop we will, loop and if s[i] exist in the t
 * we will track the index for t looping
 * if s[i] is not found and t lenght in out of bound we return false
 * otherwise true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    let charFound = false;

    while (j < t.length) {
      if (char === t[j]) {
        charFound = true;
        j++;
        break;
      } else {
        j++;
      }
    }

    if (!charFound) {
      return false;
    }
  }

  return true;
};

console.log(isSubsequence("", ""));
