function factorial(firstNum, secondNum) {
  let firstNumFactorial = recursion(firstNum);
  let secondNumFactorial = recursion(secondNum);

  let res = divide(firstNumFactorial, secondNumFactorial);

  console.log(res.toFixed(2));

  function recursion(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * recursion(n - 1);
    }
  }

  function divide(a, b) {
    return a / b;
  }
}

factorial(5, 2);
