// https://leetcode.com/problems/destination-city/

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const directPathMap = new Map();

  for (const path of paths) {
    const [cityOne, cityTwo] = path;

    directPathMap.set(cityOne, cityTwo);
  }

  for (const path of paths) {
    const [cityOne, cityTwo] = path;

    if (directPathMap.has(cityOne) === false) {
      return cityOne;
    }

    if (directPathMap.has(cityTwo) === false) {
      return cityTwo;
    }
  }
};
