// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * Problem statement
 *
 * an array of integer number will be given
 * we have to replace elements with the greatest element on the right side
 * example: [17,18,5,4,6,1]
 * result: [18,6,6,6,1,-1]
 *
 * for the last indext element there is no greatest after that, so -1 will be used
 * at index 4, 1 is the greatest. this will continue to the final result
 *
 */

/**
 * Solution
 *
 * we will store result in a new array
 * currentGreatest will be initialized with -1
 * loop through the array in revers as we have to find the greatest element on the right side
 * compare i + 1 element with currentGreatest, and use whatever value is big. replace currentGreatest with big value if needed
 *
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const result = [];

  let currentGreatest = -1;
  result[arr.length - 1] = currentGreatest;

  for (let i = arr.length - 2; i >= 0; i--) {
    const rightSideElement = arr[i + 1];

    if (rightSideElement > currentGreatest) {
      currentGreatest = rightSideElement;
    }

    result[i] = currentGreatest;
  }

  return result;
};

// console.log(replaceElements([17, 18, 5, 4, 6, 1]));
console.log(replaceElements([400]));
