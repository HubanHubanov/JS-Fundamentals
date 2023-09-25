function sorting(arr) {
  let resArr = [];

  let arrDescending = arr.sort((a, b) => b - a);

  let arrLength = arr.length;

  for (let index = 0; index < arrLength / 2; index++) {
    let firstNum = arrDescending.shift();
    let lastNum = arrDescending.pop();
    resArr.push(firstNum);
    resArr.push(lastNum);
  }
  console.log(resArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
