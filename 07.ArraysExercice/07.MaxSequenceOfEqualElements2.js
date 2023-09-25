function maxSequenceOfEqualElements(arr) {
  let equalCounter = 1;
  let maxCounter = 0;
  let maxRes = 0;
  let res = "";

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];

    let nextNum = arr[i + 1];

    if (currNum === nextNum) {
      equalCounter++;
      res = currNum;
    } else {
      equalCounter = 1;
      res = 0;
    }

    if (equalCounter > maxCounter) {
      maxCounter = equalCounter;
      maxRes = res;
    }
  }
  console.log((maxRes + " ").repeat(maxCounter));
}
maxSequenceOfEqualElements([2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
