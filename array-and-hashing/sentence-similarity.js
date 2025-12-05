// https://neetcode.io/problems/sentence-similarity/question

/**
 * Solution
 *
 * if word a and b are similar than b and a is also similar
 * means in the sentence1 and sentence2 both direction can be found
 *
 * we will loop the similarPairs array and store both direction in a Set
 *
 * than we will loop the sentence1 and check word for same index in sentence2
 * if words are not similar and there is no mapping exist we return false
 *
 * else we return true
 */

/**
 *
 * Problem
 *
 * two array of strings sentence1 and sentence2 are given.
 * and a array of similarPairs is given
 *
 * we have to check if word form sentence1 can be mapped to the word from sentence2
 * if the both word words are similar that is also similar
 *
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @returns {boolean}
 */

function areSentencesSimilar(sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) {
    return false;
  }

  const similarPairsMap = new Set();

  for (const pair of similarPairs) {
    const [firstWord, secondWord] = pair;

    similarPairsMap.add(`${firstWord},${secondWord}`);
    similarPairsMap.add(`${secondWord},${firstWord}`);
  }

  for (let i = 0; i < sentence1.length; i++) {
    const firstWord = sentence1[i];
    const secondWord = sentence2[i];

    if (firstWord === secondWord) {
      continue;
    }

    if (!similarPairsMap.has(`${firstWord},${secondWord}`)) {
      return false;
    }
  }

  return true;
}
