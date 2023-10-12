function simpleCalculator(firstNum, secondNum, operator) {
  let obj = {
    multiply: firstNum * secondNum,
    divide: firstNum / secondNum,
    add: firstNum + secondNum,
    subtract: firstNum - secondNum,
  };

  return obj[operator];
}

console.log(simpleCalculator(5, 5, "multiply"));
