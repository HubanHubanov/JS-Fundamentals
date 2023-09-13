function addAndSubtract(firstNum, secondNum, thirdNum) {
    
  let addTwoNumbers = function (a, b) {
    let addResult = a + b;
    return addResult;
  };

  let sum = addTwoNumbers(firstNum, secondNum);

  let subtractTwoNumbers = function (x, y) {
    let subtractResult = x - y;
    return subtractResult;
  };

  let finalResult = subtractTwoNumbers(sum, thirdNum);

  return finalResult;
}

console.log(addAndSubtract(23, 6, 10));
