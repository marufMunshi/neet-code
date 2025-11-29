// https://neetcode.io/problems/confusing-number/question?list=neetcode250

/**
 * Problem
 * a number will be given, we have to return true if number is confusing otherwise false
 *
 * a number is confusing when rotated 180 degree value changes and the changed value is a valid number
 *
 * 0, 1, 6, 8, 9 these number rotated 180 degree changes to -> 0, 1, 9, 8, 6
 * 2, 3, 4, 5, 7 are invalid when rotated to 180 degree
 *
 * Example:
 * n = 89, after rotate 68 so return true
 *
 * n = 11, after rotate 11, this rotation is valid but both number are same
 * so, return false
 */

/**
 * Solution
 *
 * we keep the rotatable numbers in a map with value
 * convert the given number to a string and loop the string form end as we have to reverse the number as well
 *
 * if we encounter a number that is not present in the rotatable numbers map, we return false as this is a invalid number
 *
 * add rotatable number value to a string and compare to the original number
 * if both string are not equal return true otherwise false
 */

/**
 * @param {number} n
 * @return {boolean}
 */
function confusingNumber(n) {
  const rotableNumberMap = new Map([
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ]);

  const numberToString = `${n}`;
  let result = [];

  for (let i = numberToString.length - 1; i >= 0; i--) {
    const rotateValue = rotableNumberMap.get(numberToString[i]);

    if (rotateValue === undefined) {
      return false;
    }

    result.push(rotateValue);
  }

  const resultString = result.join("");

  return resultString !== numberToString;
}
