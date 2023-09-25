function evenAndOddSubstracttion(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    if (currentNumber % 2 === 0) {
      evenSum += currentNumber;
    } else {
      oddSum += currentNumber;
    }
  }

  console.log(evenSum - oddSum);
}
evenAndOddSubstracttion([3, 5, 7, 9]);
