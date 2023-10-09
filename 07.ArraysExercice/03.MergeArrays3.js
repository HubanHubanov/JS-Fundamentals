function mergeArrays(firstArr, secondArr) {
  let resArr = [];

  for (let i = 0; i < firstArr.length; i++) {
    let currElFirsArr = firstArr[i];

    let currElSecondArr = secondArr[i];

    if (i % 2 === 0) {
      let sum = Number(currElFirsArr) + Number(currElSecondArr);
     resArr[i] = sum
    } else {
      let res = currElFirsArr + currElSecondArr;
      resArr[i] = res
    }
  }
  console.log(resArr.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
