// https://leetcode.com/problems/find-common-characters/description/

/**
 * Problem description
 *
 * an array of strings are given, we have to find every character that appears all the strings
 */

/**
 * Solution approach
 *
 * as we are given an array of strings, we have to check each character is present in a string
 * ["bella", "label", "roller"] in this example, "b" is not present in every string and "e" is present
 * we have 3 strings, if we store character count per string we can see if one character is present in every string
 * 'b' => [ { wordIndex: 0, count: 1 }, { wordIndex: 1, count: 1 } ],
 * 'e' => [
    { wordIndex: 0, count: 1 },
    { wordIndex: 1, count: 1 },
    { wordIndex: 2, count: 1 }
  ]
  * as we have 3 strings, "b" does not have 3 items in the array but "e" has
  * if we compare the character count length and strings length we can found that
  * 
  * now, an character can be found multiple times, we will take the minimum count from the list.
  * as that minimum count is present in every string
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const result = [];
  const characterMap = new Map();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (const char of word) {
      const currentValue = characterMap.get(char);

      if (currentValue === undefined) {
        characterMap.set(char, [{ wordIndex: i, count: 1 }]);
        continue;
      }

      const currentWord = currentValue.find((item) => item.wordIndex === i);

      if (currentWord === undefined) {
        currentValue.push({ wordIndex: i, count: 1 });
      } else {
        currentWord.count = currentWord.count + 1;
      }

      characterMap.set(char, currentValue);
    }
  }

  console.log("characterMap", characterMap);

  for (const [key, value] of characterMap) {
    if (value.length === words.length) {
      let minCount = Number.MAX_SAFE_INTEGER;

      for (let i = 0; i < value.length; i++) {
        minCount = Math.min(minCount, value[i].count);
      }

      for (let i = 0; i < minCount; i++) {
        result.push(key);
      }
    }
  }

  return result;
};

console.log(commonChars(["bella", "label", "roller"]));

console.log(commonChars(["cool", "lock", "cook"]));
