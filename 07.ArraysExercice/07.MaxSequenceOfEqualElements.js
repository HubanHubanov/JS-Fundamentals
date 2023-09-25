function maxSequenceOfEqualElements(arr) {
  let equalCounterMax = 0;
  let maxRes = "";

  for (let i = 0; i < arr.length; i++) {
    let equalCounter = 1;
    let currNum = arr[i];
    let res = `${currNum}`;
    for (let s = i + 1; s < arr.length; s++) {
      let nextNum = arr[s];
      if (currNum === nextNum) {
        equalCounter++;
        res += ` ${nextNum}`;
      } else {
        break;
      }
    }
    if (equalCounter > equalCounterMax) {
      equalCounterMax = equalCounter;
      maxRes = res;
    }
  }
  console.log(maxRes);
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
