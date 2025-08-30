// https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description/

/**
 * Problem statement
 * return the characters count needed to make a string subsequence
 * s, t are given. we have to find how many characrers need to append in the s to make t a subsquence
 *
 */

/**
 * Solution
 * we will loop through t
 * inside that loop we will loop s and remember the index
 * we will compare t[i] with s[j]
 * when all of t[i] is found in s we don't need any character
 * if t[i] is not found, we will return remaining character count
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let j = 0;

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    let charFound = false;

    while (j < s.length) {
      if (char === s[j]) {
        charFound = true;
        j++;
        break;
      } else {
        j++;
      }
    }

    if (!charFound) {
      return t.length - i;
    }
  }

  return 0;
};

console.log(appendCharacters("z", "abcde"));
