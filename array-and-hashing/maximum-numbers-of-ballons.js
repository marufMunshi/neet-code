// https://leetcode.com/problems/maximum-number-of-balloons/description/

// similar problem using this solution
// https://leetcode.com/problems/rearrange-characters-to-make-target-string/description/

/**
 * Problem
 * a string "text" will be given, we have count how many "target" string can be made from the given "text"
 */

/**
 * Solution
 *
 * first we will store target string characters in a map
 * after that we will update each character value by looping the text
 * now, we know count of each character appeared in the text
 *
 * we will start a while loop with true
 * inside the loop, we will decrease the character count for the target string in the map
 * we will do this by a index, looping the target string
 *
 * if any character count is less or equal than 0, we will return the result
 *
 * when the index is equal to the length of the target string, it's an indication that one target string is successfully formed
 * so will update the result and make the index 0, so that we can count the target string again
 * and eventually character value will become 0 and exit from the loop
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const targetCharacterMap = new Map();
  const target = "balloon";

  for (let i = 0; i < target.length; i++) {
    targetCharacterMap.set(target[i], 0);
  }

  for (let i = 0; i < text.length; i++) {
    const currentValue = targetCharacterMap.get(text[i]);

    if (currentValue !== undefined) {
      targetCharacterMap.set(text[i], currentValue + 1);
    }
  }

  let j = 0;
  let result = 0;

  while (true) {
    const currentTargetChar = target[j];
    const currentValue = targetCharacterMap.get(currentTargetChar);

    if (currentValue <= 0) {
      return result;
    }

    targetCharacterMap.set(currentTargetChar, currentValue - 1);
    j++;

    if (j === target.length) {
      j = 0;
      result++;
    }
  }
};
