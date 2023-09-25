
function simpleCalculator(numOne, numTwo, operator) {
  let result = 0;

  let multiplyTwoNumbers = (numOne, numTwo) => numOne * numTwo;
  let divideTwoNumbers = (numOne, numTwo) => numOne / numTwo;
  let addTwoNumbers = (numOne, numTwo) => numOne + numTwo;
  let subtractTwoNumbers = (numOne, numTwo) => numOne - numTwo;

  switch (operator) {
    case "multiply":
      result = multiplyTwoNumbers(numOne, numTwo);
      break;

    case "divide":
      result = divideTwoNumbers(numOne, numTwo);
      break;

    case "add":
      result = addTwoNumbers(numOne, numTwo);
      break;

    case "subtract":
      result = subtractTwoNumbers(numOne, numTwo);
      break;
  }

  return result;
}
console.log(simpleCalculator(5, 5, "multiply"));
console.log(simpleCalculator(40, 8, "divide"));
console.log(simpleCalculator(12, 19, "add"));
console.log(simpleCalculator(50, 13, "subtract"));

function simpleCalculator(numOne, numTwo, operator) {
    let result = 0;
  
    let multiplyTwoNumbers = (a, b) => a * b;
    let divideTwoNumbers = (a, b) => a / b;
    let addTwoNumbers = (a, b) => a + b;
    let subtractTwoNumbers = (a, b) => a - b;
  
    switch (operator) {
      case "multiply":
        result = multiplyTwoNumbers(numOne, numTwo);
        break;
  
      case "divide":
        result = divideTwoNumbers(numOne, numTwo);
        break;
  
      case "add":
        result = addTwoNumbers(numOne, numTwo);
        break;
  
      case "subtract":
        result = subtractTwoNumbers(numOne, numTwo);
        break;
    }
  
    return result;
  }
  console.log(simpleCalculator(5, 5, "multiply"));
  console.log(simpleCalculator(40, 8, "divide"));
  console.log(simpleCalculator(12, 19, "add"));
  console.log(simpleCalculator(50, 13, "subtract"));
