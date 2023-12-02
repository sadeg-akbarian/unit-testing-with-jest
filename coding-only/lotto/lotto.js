export function randomLottoTicket() {
  const numberArray = [];

  function pushRandomNumber() {
    const currentNumber = Math.floor(Math.random() * 49 + 1);
    const isCurrentNumberInTheArray = numberArray.includes(currentNumber);
    if (isCurrentNumberInTheArray) {
      pushRandomNumber();
    } else {
      numberArray.push(currentNumber);
    }
  }

  for (let i = 0; i < 6; i++) {
    pushRandomNumber();
  }

  return numberArray;
}

// npm run test:coding -- -t "randomLottoTicket"
