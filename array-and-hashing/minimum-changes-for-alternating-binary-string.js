// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/

/**
 * Problem statement
 *
 * a string is given consisting of only "0" and "1"
 * a string is called alternating if no adjacent char are similar
 * "010" is alternating, "0100" is not alternating
 *
 * we have to return the minimum number of operation to make the string alternating
 */

/**
 * Solution
 *
 * as the string binary, it can either start form "0" or "1"
 * so, minimum operation can be found in both start regardless of how the string is given
 *
 * when in 0 index position ideal string for "0" start is "0"
 * when in 0 index position ideal string for "1" start is "1"
 *
 * when in 1 index position ideal string for "0" start is "1"
 * when in 0 index position ideal string for "1" start is "0"
 *
 * we can calculating by checking index modulus value by 2
 *
 * for every index, we will check if the given string has ideal character for both "0" and "1" index start
 * if given string does not match we will increase the change operation
 *
 * return the minimum of both change operation values
 */

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let changeOperationZero = 0;
  let changeOperationOne = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] !== "0") {
        changeOperationZero++;
      }

      if (s[i] !== "1") {
        changeOperationOne++;
      }
    } else {
      if (s[i] !== "1") {
        changeOperationZero++;
      }

      if (s[i] !== "0") {
        changeOperationOne++;
      }
    }
  }

  return Math.min(changeOperationZero, changeOperationOne);
};
