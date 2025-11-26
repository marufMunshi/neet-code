// https://leetcode.com/problems/maximum-score-after-splitting-a-string/

/**
 * Problem description
 *
 * A string is given, that contains only 0 and 1.
 * we have to calculate the maximum score after splitting the string in substring
 *
 * example: "00111"
 * result is 5, when string is split in "00" and "111"
 * so, 2 + 3 = 5
 */

/**
 * Solution approach
 * first we will calculate every 1, we will consider right string starting form 0 and left string does not exist
 *
 * then, we will loop the string and check for "0" value in every index.
 * if "0" value found, increase the zero calculation variable, else decrease the one calculation.
 * after that sum both value and replace maxScore by comparing
 *
 * "00111" -> when index is 0, so left string is "0" and right string is "0111" -> score = 1 + 3 = 4
 * when index is 1, left string "00" and right string "111" -> score = 2 + 3 = 5
 *
 * one important thing is to end the loop at length - 1, because if go the the last index, there will be no right string
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let zeroCalculation = 0;
  let oneCalculation = 0;
  let maxScore = 0;

  for (const char of s) {
    if (char === "1") {
      oneCalculation++;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      zeroCalculation++;
    } else {
      oneCalculation--;
    }

    maxScore = Math.max(maxScore, zeroCalculation + oneCalculation);
  }

  return maxScore;
};
