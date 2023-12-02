export function analyzePassword(password) {
  const result = {};
  let numberIncluded = false;
  let lettersIncluded = false;

  const stringLength = password.length;

  const regexNumbers = /^(?=.*\d).+$/;
  const regexLetters = /^(?=.*[a-zA-Z]).+$/;

  if (regexNumbers.test(password)) {
    numberIncluded = true;
  }

  if (regexLetters.test(password)) {
    lettersIncluded = true;
  }

  result.length = stringLength;
  result.hasNumbers = numberIncluded;
  result.hasCharacters = lettersIncluded;

  return result;
}

// npm run test:coding -- -t "analyzePassword"
