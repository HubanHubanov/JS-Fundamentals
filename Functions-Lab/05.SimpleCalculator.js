function simpleCalculator(numOne, numTwo, operator) {
  let result = 0;

  switch (operator) {
    case "multiply":
      result = numOne * numTwo;
      break;

    case "divide":
      result = numOne / numTwo;
      break;

    case "add":
      result = numOne + numTwo;
      break;

    case "subtract":
      result = numOne - numTwo;
      break;
  }

  return result;
}

console.log(simpleCalculator(5, 5, "multiply"));

console.log(simpleCalculator(40, 8, "divide"));

console.log(simpleCalculator(12, 19, "add"));

console.log(simpleCalculator(50, 13, "subtract"));
