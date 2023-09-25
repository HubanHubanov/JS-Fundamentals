function evenAndOddSubstracttion(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let currNum of arr) {
    evenSum += currNum % 2 === 0 ? currNum : 0;
    oddSum += currNum % 2 !== 0 ? currNum : 0;
  }

  console.log(evenSum - oddSum);
}

evenAndOddSubstracttion([1, 2, 3, 4, 5, 6]);
