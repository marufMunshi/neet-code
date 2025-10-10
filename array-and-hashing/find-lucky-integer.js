// https://leetcode.com/problems/find-lucky-integer-in-an-array/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const numberFrequencyMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const currentValue = numberFrequencyMap.get(arr[i]) || 0;

    numberFrequencyMap.set(arr[i], currentValue + 1);
  }

  let result = -1;

  numberFrequencyMap.forEach((value, key) => {
    if (value === key) {
      result = Math.max(result, key);
    }
  });

  return result;
};
