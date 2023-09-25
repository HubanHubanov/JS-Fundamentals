function calculator(numberOne, operator, numberTwo) {
  let result = 0;

  if (operator === "+") {
    result = numberOne + numberTwo;
  } else if (operator === "-") {
    result = numberOne - numberTwo;
  } else if (operator === "/") {
    result = numberOne / numberTwo;
  } else if (operator === "*") {
    result = numberOne * numberTwo;
  }

  console.log(result.toFixed(2));
}

calculator(5, "+", 10);

calculator(25.5, "-", 3);
