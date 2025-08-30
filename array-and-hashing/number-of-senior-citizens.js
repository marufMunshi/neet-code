// https://leetcode.com/problems/number-of-senior-citizens/description/

/**
 * Problem statement
 *
 * an array of string is given, string consist of 15 characrters
 * 0, 9 is phone number
 * 10 is gender
 * 11,12 is age
 * 13,14 is seat number
 * we have to find passengers strictly more than 60 years old.
 */

/**
 * Solution
 * loop through the array, get the age form string using index
 * check if age > 60 and than increase the count
 * return count
 */

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let count = 0;

  for (let i = 0; i < details.length; i++) {
    const ageFirstPart = parseInt(details[i][11]);
    const ageSecondPart = parseInt(details[i][12]);

    if (ageFirstPart * 10 + ageSecondPart > 60) {
      count = count + 1;
    }
  }

  return count;
};

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
