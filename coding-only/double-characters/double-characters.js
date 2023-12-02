export function doubleCharacters(word) {
  const wordSplitInArray = word.split("");
  const lettersDoubledInArray = [];

  for (let i = 0; i < wordSplitInArray.length; i++) {
    lettersDoubledInArray.push(wordSplitInArray[i].repeat(2));
  }

  return lettersDoubledInArray.join("");
}

// npm run test:coding -- -t "doubleCharacters"
