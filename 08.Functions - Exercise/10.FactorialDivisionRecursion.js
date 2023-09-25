function factorialDivision(numOne, numTwo) {
  function factorial(number) {
    if (number === 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }

  let numOneFactorial = factorial(numOne);
  let numTwoFactorial = factorial(numTwo);

  let result = (numOneFactorial / numTwoFactorial).toFixed(2);

  console.log(result);
}

factorialDivision(5, 2);
