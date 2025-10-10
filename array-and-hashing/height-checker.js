// https://leetcode.com/problems/height-checker/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const sortedArray = heights.slice();

  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedArray[i]) {
      result++;
    }
  }

  return result;
};
