function oddAndEvenSum(num) {
  let numAsString = num.toString();

  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    let currNum = Number(numAsString[i]);
    if (currNum % 2 === 0) {
      evenSum = add(evenSum, currNum);
    } else {
      oddSum = add(oddSum, currNum);
    }
  }
  function add(a, b) {
    return a + b;
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234);
