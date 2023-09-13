function specialNumbers(num) {
  let isSpecial = "False";

  for (let index = 1; index <= num; index++) {
    let indexToSting = index.toString();
    let sum = 0;

    for (let i = 0; i < indexToSting.length; i++) {
      sum += Number(indexToSting[i]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      isSpecial = "True";
    }

    console.log(`${index} -> ${isSpecial}`);
    isSpecial = "False";
  }
}

specialNumbers(15);
