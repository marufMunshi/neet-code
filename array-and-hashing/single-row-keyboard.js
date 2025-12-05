// https://neetcode.io/problems/single-row-keyboard/question

function calculateTime(keyboard, word) {
  let lastIndex = 0;
  let result = 0;

  const keyboardCharIndexMap = new Map();

  for (let i = 0; i < keyboard.length; i++) {
    keyboardCharIndexMap.set(keyboard[i], i);
  }

  for (let i = 0; i < word.length; i++) {
    const indexValue = keyboardCharIndexMap.get(word[i]);

    result = result + Math.abs(indexValue - lastIndex);

    lastIndex = indexValue;
  }

  return result;
}
