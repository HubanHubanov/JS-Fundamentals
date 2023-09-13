function maxNumber(arr) {
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isNotBigger = false;
    let currNum = arr[i];
    for (let s = i + 1; s < arr.length; s++) {
      let nextNum = arr[s];

      if (currNum <= nextNum) {
        isNotBigger = true;
        break;
      }
    }
    if (!isNotBigger) {
      resArr.push(currNum);
    }
  }
  console.log(resArr.join(" "));
}

maxNumber([1, 4, 3, 2]);
console.log("-----------------");
maxNumber([14, 24, 3, 19, 15, 17]);
console.log("-----------------");
maxNumber([41, 41, 34, 20]);
console.log("-----------------");
maxNumber([27, 19, 42, 2, 13, 45, 48]);
