// https://leetcode.com/problems/string-matching-in-an-array/description/

/**
 * Problem statement
 * an array of words will be given, we have to find out which words are substring of another words
 */

/**
 * Solution approach
 *
 * as substring is a part of another string, so sorting the array by words length is required
 * because a big string will not be substring of small string
 *
 * now we have to loop the sorted array
 * we will need a nested loop
 * i index whole string will be checked at j index string
 *
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const result = new Set();

  for (let i = 0; i < words.length; i++) {
    const substringWord = words[i];
    // console.log("substringWord", substringWord);

    for (let j = 0; j < words.length; j++) {
      if (i === j) {
        continue;
      }

      let substringIsFound = false;

      const word = words[j];

      // console.log("word", word);

      let windowStart = 0;
      let windowEnd = 0;

      while (windowEnd < word.length) {
        if (windowEnd - windowStart === substringWord.length - 1) {
          const substringToMatch = word.slice(windowStart, windowEnd + 1);
          // console.log("substringToMatch", substringToMatch);

          if (substringToMatch === substringWord) {
            result.add(substringToMatch);
            substringIsFound = true;
            break;
          } else {
            windowStart++;
          }
        }

        windowEnd++;
      }

      if (substringIsFound) {
        break;
      }
    }
  }

  return Array.from(result);
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
