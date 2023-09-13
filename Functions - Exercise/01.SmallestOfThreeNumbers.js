function smallestOfThreeNumbers(numOne, numTwo, numThree) {
  let smallestNum = Number.MAX_SAFE_INTEGER;

  let arr = [numOne, numTwo, numThree];

  for (i = 0; i < 3; i++) {
    let currentNum = arr[i];

    if (currentNum < smallestNum) {
      smallestNum = currentNum;
    }
  }
  return smallestNum
}

console.log(smallestOfThreeNumbers(600, 342, 123));
