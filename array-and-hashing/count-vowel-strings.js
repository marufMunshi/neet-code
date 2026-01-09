// https://leetcode.com/problems/count-vowel-strings-in-ranges/

/**
 * Problem description
 *
 * an array of words are given and an 2d array of integer queries
 * words array -> ["aba","bcb","ece","aa","e"]
 * queries array -> [[0,2],[1,4],[1,1]]
 * the query consist of index range, left index and right index
 * with the range we have to count how many words start and end with vowel
 * the index range is inclusive, meaning 0 will start from 0 and 2 will end at 2
 */

/**
 * Solution approach
 *
 * first we will create a function that check if a character is vowel
 * we will store each index count in a prefix sum map -> {index: count}
 * initially we will store {-1: 0} this value so that first index has something to check
 *
 * we will loop the words array and check the count for previous index
 * if current index has vowel word will increase the count, otherwise count will remain same
 * store the current index and count in the map
 *
 * now, we will loop the queries
 * query -> [1,4]
 * first we will get the right index count, so we will get form 0 index to 4 index count
 * then we will get left index - 1 count, so we will get 0 index count
 * we will calculate right index count -0 left index count
 *
 * the reason we will get left index -1 , because right index will cover the left index
 * in the example index 4 has all the previous values
 * but we need index 1 to index 4
 * so, we will get index 4, than get index 0
 * so index 4 - index 0 = index 1 to index 4
 */

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  function charIsVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char);
  }

  const prefixVowelCount = new Map();
  prefixVowelCount.set(-1, 0);

  for (let i = 0; i < words.length; i++) {
    let previousCount = prefixVowelCount.get(i - 1);
    const currentWord = words[i];

    if (
      charIsVowel(currentWord[0]) &&
      charIsVowel(currentWord[currentWord.length - 1])
    ) {
      previousCount = previousCount + 1;
    }

    prefixVowelCount.set(i, previousCount);
  }

  let result = [];

  for (let i = 0; i < queries.length; i++) {
    const [left, right] = queries[i];

    const rightIndexCount = prefixVowelCount.get(right);
    const leftIndexCount = prefixVowelCount.get(left - 1);

    result.push(rightIndexCount - leftIndexCount);
  }

  return result;
};

console.log(
  vowelStrings(
    ["aba", "bcb", "ece", "aa", "e"],
    [
      [0, 2],
      [1, 4],
      [1, 1],
    ]
  )
);

console.log(
  vowelStrings(
    ["a", "e", "i"],
    [
      [0, 2],
      [0, 1],
      [2, 2],
    ]
  )
);
