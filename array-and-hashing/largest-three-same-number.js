// https://leetcode.com/problems/largest-3-same-digit-number-in-string/

/**
 * Problem description
 *
 * a string of numbers is given
 * we have to find largest 3 same digit number from that string
 *
 * return largest 3 digit in a string or empty string
 * string length is 3 <= num.length <= 1000
 */

/**
 * Solution
 *
 * as we can see there are at least 3 digit will be available
 * so, we can directly check is those 3 digit is equal
 *
 * store the maximum digit and return by repeating 3 of that
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let maxNum = -1;

  for (let i = 1; i < num.length - 1; i++) {
    if (num[i - 1] === num[i] && num[i] === num[i + 1]) {
      maxNum = Math.max(maxNum, parseInt(num[i]));
    }
  }

  if (maxNum === -1) {
    return "";
  }

  return `${maxNum}`.repeat(3);
};

console.log(largestGoodInteger("42352338"));
