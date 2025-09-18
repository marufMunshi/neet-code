// https://leetcode.com/problems/isomorphic-strings/description/

/**
 * Problem statement
 *
 * two strings "s" and "t" will be given
 * we have to check if they are isomorphic
 *
 * two strings will be isomorphic if "s" characters can be replaced to get "t"
 * two character can not mapped to one character
 *
 * constraints
 * t.length == s.length
 * 1 <= s.length <= 5 * 104
 */

/**
 * Solution approach
 *
 *
 * for mapping one character to another we have to use Map
 * if character is not found, we will add it
 * if character is found and mapped to same character then it's fine
 * else character is found and mapped to another character then these are not isomorphic
 *
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const charactersMap = new Map();
  const charactersUsedAsValues = new Set();

  for (let i = 0; i < s.length; i++) {
    const currentSChar = s[i];
    const currentTChar = t[i];

    if (charactersMap.has(currentSChar)) {
      const value = charactersMap.get(currentSChar);

      if (value !== currentTChar) {
        return false;
      }
    } else {
      if (charactersUsedAsValues.has(currentTChar)) {
        return false;
      }

      charactersMap.set(currentSChar, currentTChar);
      charactersUsedAsValues.add(currentTChar);
    }
  }

  return true;
};
