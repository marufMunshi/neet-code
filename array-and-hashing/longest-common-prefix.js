// https://leetcode.com/problems/longest-common-prefix/description/

/**
 * Problem statement
 *
 * an array of strings will be given, we have find longest common prefix form that array
 * need to store matched prefix in an array. before returning join the array
 * if there is no prefix, will return empty string
 *
 * example:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * -------------
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 * Constrants
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 *
 * if array contain only one string, reslut will be that string
 * if any string value is empty string result will be empty string
 */

/**
 * Solution approach
 * we have to check all the character of the strings
 * we will loop the first item and check first item character to every string
 * a boolean will be used to check if all the character is matched or not
 * if matched we will store the character in the result array
 *
 * we have to check if currentItem is out of bound in respect to firstItem current index
 *
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const firstItem = strs[0];

  if (strs.length === 1) {
    return firstItem;
  }

  const result = [];

  for (let i = 0; i < firstItem.length; i++) {
    const charToMatch = firstItem[i];
    let allMatch = true;

    for (let j = 1; j < strs.length; j++) {
      const currentItem = strs[j];

      if (i >= currentItem.length || currentItem[i] !== charToMatch) {
        allMatch = false;
        break;
      }
    }

    if (allMatch) {
      result.push(charToMatch);
    } else {
      break; // Stop checking further characters
    }
  }

  return result.join("");
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
