function mergeArrays(firstArr, secondArr) {
  let thirdArr = [];

  for (let i = 0; i < firstArr.length; i++) {
    let num = 0;
    for (let s = 0; s < secondArr.length; s++) {
      if (i === s) {
        if (i % 2 === 0) {
          num = Number(firstArr[i]) + Number(secondArr[s]);
        } else {
          num = firstArr[i] + secondArr[s];
        }

        thirdArr.push(num);
      }
    }
  }

  console.log(thirdArr.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
