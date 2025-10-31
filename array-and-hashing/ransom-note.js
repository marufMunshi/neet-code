// https://leetcode.com/problems/ransom-note/description/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    const currentValue = magazineMap.get(magazine[i]) || 0;

    magazineMap.set(magazine[i], currentValue + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const currentValue = magazineMap.get(ransomNote[i]);

    if (currentValue === undefined) {
      return false;
    }

    if (currentValue - 1 < 0) {
      return false;
    }

    magazineMap.set(ransomNote[i], currentValue - 1);
  }

  return true;
};
