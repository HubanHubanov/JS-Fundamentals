function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  let res = evenSum - oddSum;

  console.log(res);
}
evenAndOddSubtraction([3, 5, 7, 9]);
