// https://leetcode.com/problems/pascals-triangle/description/

//  pascal[i][j] = pascal[i−1][j−1] + pascal[i−1][j]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [[1]];

  for (let i = 1; i < numRows; i++) {
    const currentRow = [];

    for (let j = 0; j < i + 1; j++) {
      const previousAdjacentIndexOne = j - 1;
      const previousAdjacentIndexTwo = j;

      const adjacentValueOne = result[i - 1][previousAdjacentIndexOne] || 0;
      const adjacentValueTwo = result[i - 1][previousAdjacentIndexTwo] || 0;

      currentRow.push(adjacentValueOne + adjacentValueTwo);
    }

    result.push(currentRow);
  }

  return result;
};

console.log(generate(5));
