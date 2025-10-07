// https://leetcode.com/problems/find-missing-and-repeated-values/description/

/**
 * Problem
 * a 2d integer matrix will be given size of n * n
 * integer values will be in the range of 1 to n^2
 * we have to find the duplicate and missing value
 * exactly one duplicate and one missing value exist
 */

/**
 * Solution
 * first we will store numbers in a set, as only one number is duplicate we find that
 * after that we will start a loop, loop will run till n * n (grid size)
 * as numbers are in the range of 1 to n^2, if any number does not appear in the set that will be the missing number
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const numbersSet = new Set();

  let duplicateValue = -1;
  let missingValue = -1;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (numbersSet.has(grid[i][j])) {
        duplicateValue = grid[i][j];
      } else {
        numbersSet.add(grid[i][j]);
      }
    }
  }

  for (let i = 0; i < grid.length * grid.length; i++) {
    if (numbersSet.has(i + 1) === false) {
      missingValue = i + 1;
      break;
    }
  }

  return [duplicateValue, missingValue];
};
