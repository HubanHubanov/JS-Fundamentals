function smallestOfThreeNumbers(numOne, numTwo, numThree) {
  let result = Math.min(numOne, numTwo, numThree);
  return result;
}

console.log(smallestOfThreeNumbers(600, 342, 123));

console.log(smallestOfThreeNumbers(600, 100, -3));
