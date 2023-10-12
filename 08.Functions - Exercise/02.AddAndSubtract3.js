function addAndSubtract(firstNum, secondNum, thirdNum) {
  let sum = add(firstNum, secondNum);
  let res = substact(sum, thirdNum);
  print(res);

  function add(a, b) {
    return a + b;
  }

  function substact(a, b) {
    return a - b;
  }

  function print(a) {
    return console.log(a);
  }
}

addAndSubtract(23, 6, 10);
