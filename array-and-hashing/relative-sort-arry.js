// https://leetcode.com/problems/relative-sort-array/description/

/**
 * Problem description
 *
 * two array arr1 and arr2 are given
 * all items in arr2 are present in arr1
 * arr2 items are distinct
 *
 * we have sort the arr1 items in a way that, order of items in arr2 are intact
 * after finishing arr2 items, arr1 items will append later with ascending order
 * item found in arr2, may have duplicates in arr1, while ordering the items we have to keep the duplicates
 *
 * Example:
 * arr1 = [2,3,1,3,2,4,6,7,9,2,19]
 * arr2 = [2,1,4,3,9,6]
 * Output: [2,2,2,1,4,3,3,9,6,7,19]
 */

/**
 * Solution Approach
 *
 * first store arr1 item with count in a map
 *
 * loop the arr2, for every item in arr2, we will first get the count form the map
 * and push that item according to the count to result array
 * after pushing the item, delete that item form the map
 *
 * now, few items left in the map that are not present in arr2
 * we have to sort those items in ascending order and append those at the end of the result array
 *
 * return the result
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const numberToCountMap = new Map();
  const result = [];

  for (const number of arr1) {
    const currentCount = numberToCountMap.get(number) || 0;
    numberToCountMap.set(number, currentCount + 1);
  }

  for (const number of arr2) {
    const count = numberToCountMap.get(number);

    if (count === undefined) {
      continue;
    }

    for (let i = 0; i < count; i++) {
      result.push(number);
    }

    numberToCountMap.delete(number);
  }

  const restOfNumbers = [];

  numberToCountMap.forEach((value, key) => {
    for (let i = 0; i < value; i++) {
      restOfNumbers.push(key);
    }
  });

  restOfNumbers.sort((a, b) => a - b);

  return result.concat(restOfNumbers);
};
