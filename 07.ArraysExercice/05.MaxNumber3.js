function maxNumber(input) {
  let res = "";

  for (let i = 0; i < input.length; i++) {
    let notTopInteger = false;
    let currNum = input[i];
    for (let j = i + 1; j < input.length; j++) {
      let numToCompare = input[j];
      if (currNum <= numToCompare) {
        notTopInteger = true;
      }
    }
    if (!notTopInteger) {
      res += `${currNum} `;
    }
  }

  console.log(res);
}
maxNumber([1, 4, 3, 2]);

maxNumber([14, 24, 3, 19, 15, 17]);

maxNumber([41, 41, 34, 20]);

maxNumber([27, 19, 42, 2, 13, 45, 48]);
