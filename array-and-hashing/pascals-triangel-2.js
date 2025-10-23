/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const numOfRows = rowIndex + 1;
  const result = [[1]];

  for (let i = 1; i < numOfRows; i++) {
    const currentRow = [];

    for (let j = 0; j <= i; j++) {
      const previousAdjacentValueOne = result[i - 1][j - 1] || 0;
      const previousAdjacentValueTwo = result[i - 1][j] || 0;

      currentRow.push(previousAdjacentValueOne + previousAdjacentValueTwo);
    }

    result.push(currentRow);
  }

  return result[rowIndex];
};

console.log(getRow(3));
