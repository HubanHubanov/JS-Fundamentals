function smalllestOfThreeNUmbers(firstNum, secondNum, thirdNum) {
  let arr = [firstNum, secondNum, thirdNum];

  let minNum = Number.MAX_SAFE_INTEGER;

  for (let num of arr) {
    if (num < minNum) {
      minNum = num;
    }
  }

  console.log(minNum);
}

smalllestOfThreeNUmbers(2, 5, 3);
