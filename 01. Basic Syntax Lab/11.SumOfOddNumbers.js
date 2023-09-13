function sumOfOddNumbers(n) {
  let counter = 0;
  let sum = 0;
  let buff = "";

  for (let i = 1; i <= 100; i += 2) {
    counter++;
    sum += i;

    if (counter <= n) {
      console.log(i);
      buff = sum;
    }
  }

  console.log(`Sum: ${buff}`);
}

sumOfOddNumbers(5);
