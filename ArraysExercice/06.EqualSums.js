function equalSums(arr) {
  let arrLength = arr.length;
  let sumLeft = 0;
  let isEqual = false;

  for (let i = 0; i < arrLength; i++) {
    let currNum = arr[i];
    if (i === 0) {
      sumLeft = 0;
    } else {
      sumLeft += arr[i - 1];
    }

    let sumRight = 0;
    for (let s = i + 1; s < arrLength; s++) {
      let nextNum = arr[s];
      sumRight += nextNum;
    }
    if (sumLeft === sumRight) {
      isEqual = true;
      console.log(i);
    }
  }
  if (!isEqual) {
    console.log("no");
  }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
