function oddAndEvenFunction(num) {
  let oddSum = 0;
  let evenSum = 0;

  let numToString = num.toString();

  for (i = 0; i < numToString.length; i++) {
    let currNum = Number(numToString[i]);

    if (currNum % 2 === 0) {
      evenSum += currNum;
    } else {
      oddSum += currNum;
    }
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
console.log(oddAndEvenFunction(1000435));
console.log(oddAndEvenFunction(3495892137259234));
