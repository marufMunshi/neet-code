// https://leetcode.com/problems/can-place-flowers/description/

/**
 * Problem statement
 *
 * an array is given with containing 0 or 1
 * 0 means empty flower bed and 1 means bed has flower plant
 *
 * also a number "n" is given
 * we have to find out if "n" number of new flower can be placed
 * condition is no adjacent flower can be placed
 *
 * constraints
 *
 * 1 <= flowerbed.length <= 2 * 10^4
 * flowerbed[i] is 0 or 1
 * There are no two adjacent flowers in flowerbed
 * 0 <= n <= flowerbed.length
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    const previousPosition = flowerbed[i - 1] || 0;
    const nextPosition = flowerbed[i + 1] || 0;
    const currentPosition = flowerbed[i];

    if (previousPosition === 0 && currentPosition === 0 && nextPosition === 0) {
      n--;
      flowerbed[i] = 1;
    }
  }

  return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
