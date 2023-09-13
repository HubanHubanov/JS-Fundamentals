function addAndSubtract(firstNum, secondNum, thirdNum) {
    
  let sumTwoNumbers = (a, b) => a + b;

  let sum = sumTwoNumbers(firstNum, secondNum);

  let subtractTwoNumbers = (x, y) => x - y;

  let subtract = subtractTwoNumbers(sum, thirdNum);

  return subtract;
}

console.log(addAndSubtract(23, 6, 10));
