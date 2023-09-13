function perfectNumber(num) {
  let sum = 0;

  for (let index = 1; index < num; index++) {
    if (num % index === 0) {
      sum += index;
    }
  }

  if (sum === num) {
    return "We have a perfect number!";
  } else {
    return "It's not so perfect.";
  }
}

console.log(perfectNumber(28));
console.log(perfectNumber(1236498));
