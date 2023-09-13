function mergeArrays(firstArr, secondArr) {
  let thirdArr = [];
  let index = 0;

  for (let i = 0; i < firstArr.length; i++) {
    let num = 0;

    if (i % 2 === 0) {
      num = Number(firstArr[i]) + Number(secondArr[i]);
    } else {
      num = firstArr[i] + secondArr[i];
    }

    thirdArr[i] = num;
  }

  console.log(thirdArr.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
