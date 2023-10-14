function factorialDivision(num1, num2) {

  let factorialOfNum1 = factorial(num1);
  let factorialOfNum2 = factorial(num2);

  let divideTwoNumber = (a, b) => a / b

  let res = divideTwoNumber(factorialOfNum1, factorialOfNum2)

  console.log(res.toFixed(2));

  function factorial(n) {
    let res = 1;

    for (let i = 1; i <= n; i++) {
      res *= i;
    }
    return res;
  }

}
factorialDivision(5, 2);
