// https://neetcode.io/problems/palindrome-permutation/question?list=neetcode250

function canPermutePalindrome(s) {
  const isEvenLength = s.length % 2 === 0;

  const charCountMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const currentValue = charCountMap.get(s[i]) || 0;

    charCountMap.set(s[i], currentValue + 1);
  }

  let oddCount = 0;

  for (const value of charCountMap.values()) {
    if (value % 2 === 0) {
      continue;
    }

    if (isEvenLength === false && oddCount === 0) {
      oddCount = oddCount + 1;
      continue;
    }

    return false;
  }

  return true;
}
