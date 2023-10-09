function addAndSubtract(data) {
  let res = [];
  let dataSum = 0;
  let resSum = 0;

  for (let i = 0; i < data.length; i++) {
    let currNum = data[i];
    dataSum += currNum;
    if (currNum % 2 === 0) {
      currNum += i;
    } else {
      currNum -= i;
    }
    resSum += currNum;
    res[i] = currNum;
  }

  console.log(res);
  console.log(dataSum);
  console.log(resSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
