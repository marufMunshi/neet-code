// https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/description/

/**
 * Problem statement
 *
 * a string will be given, we have find the maximum frequency of odd characters
 * and minimum frequency of even characters
 * then return the diff
 * we need to return the maximum diff, so to get the maximum diff we have the take one max and one min
 *
 * input string will have odd and even frequency
 */

/**
 * Solution
 *
 * store character frequency in a map
 * loop map values to find max odd and minimum even
 * return the diff
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  let maxOdd = 0;
  let minEven = Number.MAX_SAFE_INTEGER;

  const charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const currentValue = charMap.get(currentChar) || 0;

    charMap.set(currentChar, currentValue + 1);
  }

  charMap.forEach((value) => {
    if (value % 2 === 0) {
      minEven = Math.min(minEven, value);
    } else {
      maxOdd = Math.max(maxOdd, value);
    }
  });

  return maxOdd - minEven;
};

console.log(maxDifference("mmsmsym"));
