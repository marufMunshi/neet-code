// https://leetcode.com/problems/score-of-a-string/

/**
 * Problem statement
 *
 * a string will be given.
 * we have to calculate the sum of absolute difference of two adjacent characters
 */

/**
 * Solution approach
 *
 * as input will be lowercase english characters, we will first store all characters values in a map
 * 'a' will be 0, and 'z' will be 25 -> step 1
 * result will be initialze with 0 -> step 2
 * loop through the rest of the character and add result abs(string[i] - string[i-1] ) -> step 3
 */

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  const LOWERCASE_CHARACTER_MAP = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  let result = 0;

  for (let i = 1; i < s.length; i++) {
    const currentChar = s[i];
    const previousChar = s[i - 1];

    result =
      result +
      Math.abs(
        LOWERCASE_CHARACTER_MAP[currentChar] -
          LOWERCASE_CHARACTER_MAP[previousChar]
      );
  }

  return result;
};

console.log(scoreOfString("hello"));
