function amazingNumbers(number) {
  let numberToString = number.toString();
  let sum = 0;
  let isAmazing = "False";

  for (let i = 0; i < numberToString.length; i++) {
    let currentNumber = Number(numberToString[i]);
    sum += currentNumber;
  }
  let sumToString = sum.toString();

  for (let i = 0; i < sumToString.length; i++) {
    let currentNumber = Number(sumToString[i]);

    if (currentNumber === 9) {
      isAmazing = "True";
      break;
    }
  }

  console.log(`${number} Amazing? ${isAmazing}`);
}

amazingNumbers(1233);
