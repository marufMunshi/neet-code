// https://leetcode.com/problems/circular-sentence/description/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const words = sentence.split(" ");

  const lastWord = words[words.length - 1];
  const firstWord = words[0];

  if (firstWord[0] !== lastWord[lastWord.length - 1]) {
    return false;
  }

  for (let i = 1; i < words.length; i++) {
    const previousWord = words[i - 1];
    const currentWord = words[i];

    if (previousWord[previousWord.length - 1] !== currentWord[0]) {
      return false;
    }
  }

  return true;
};
