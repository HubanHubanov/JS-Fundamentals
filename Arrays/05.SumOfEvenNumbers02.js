function sumOfEvenNumbers(arr) {
  let sum = 0;

  for (let el of arr) {
    let num = Number(el);
    sum += num % 2 === 0 ? num : 0;
  }

  console.log(sum);
}

sumOfEvenNumbers(["1", "2", "3", "4", "5", "6"]);
