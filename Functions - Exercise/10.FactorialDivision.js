function factorialDivision(numOne, numTwo) {
  let factorialOne = 1;
  let factorialTwo = 1;

  for (let i = numOne; i >= 1; i--) {
    factorialOne *= i;
  }

  for (let m = numTwo; m >= 1; m--) {
    factorialTwo *= m;
  }

  let divisionResult = (factorialOne / factorialTwo).toFixed(2);

  return divisionResult
}

console.log(factorialDivision(6, 2));
