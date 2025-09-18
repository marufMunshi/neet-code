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
 * Solution approach
 *
 * as the array will start either 0 or 1
 * if the array start with 0, we can place flower at every even index
 * if the array start with 1, we can place flower at every odd index
 * so, inside the loop we will check if the desired position has flower or not
 * if there is no flower we will increment the flower count
 * if count is less than we return false
 *
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
