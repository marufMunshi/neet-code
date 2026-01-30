// https://leetcode.com/problems/sort-the-people/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const nameWithHeight = [];

  for (let i = 0; i < heights.length; i++) {
    nameWithHeight.push({
      name: names[i],
      height: heights[i],
    });
  }

  return nameWithHeight
    .sort((firstItem, secondItem) => secondItem.height - firstItem.height)
    .map((item) => item.name);
};
