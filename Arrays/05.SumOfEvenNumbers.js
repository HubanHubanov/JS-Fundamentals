function sumOfEvenNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentInput = Number(arr[i]);
    if (currentInput % 2 === 0) {
      sum += currentInput;
    }
  }

  console.log(sum);
}

sumOfEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumOfEvenNumbers(["2", "4", "6", "8", "10"]);
