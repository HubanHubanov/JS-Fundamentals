function mathPwer(num, power) {
  let result = 1;

  for (let i = 0; i < power; i++) {
    // result *= num
    //  result = result * num

    result = multiply(result, num);
  }
  print(result);

  function multiply(a, b) {
    return a * b;
  }

  function print(text) {
    console.log(text);
  }
}
mathPwer(2, 8);
mathPwer(3, 4);
