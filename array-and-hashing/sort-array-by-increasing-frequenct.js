// https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const numberToCountMap = new Map();

  for (const num of nums) {
    const currentValue = numberToCountMap.get(num) || 0;

    numberToCountMap.set(num, currentValue + 1);
  }

  return nums.sort((firstItem, secondItem) => {
    const firstItemValue = numberToCountMap.get(firstItem);
    const secondItemValue = numberToCountMap.get(secondItem);

    if (firstItemValue - secondItemValue === 0) {
      return secondItem - firstItem;
    } else if (firstItemValue - secondItemValue < 0) {
      return -1;
    } else {
      return 1;
    }
  });
};
