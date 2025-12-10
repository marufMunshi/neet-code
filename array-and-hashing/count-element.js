// https://neetcode.io/problems/counting-elements/question?list=neetcode250

/**
 * Problem description
 *
 * an array of positive numbers are given.
 * we have to count how many x + 1 are present in the array
 * here x is the index i position value
 */

/**
 * Solution approach
 *
 * first we will store numbers in a map
 *
 * then we will loop the array, if x + 1 found we will increase the count
 */

function countElements(arr) {
  const numbersCountMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const currentValue = numbersCountMap.get(arr[i]) || 0;

    numbersCountMap.set(arr[i], currentValue + 1);
  }

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentValue = numbersCountMap.get(arr[i] + 1);

    if (currentValue) {
      result = result + 1;
    }
  }

  return result;
}
