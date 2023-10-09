function equalSums(arr) {
  let match = false;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      sum = 0;
    } else {
      sum += arr[i - 1];
    }
    let secondSum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      secondSum += arr[j];
    }

    if (sum === secondSum) {
      console.log(i);
      match = true;
    }
  }

  if (!match) {
    console.log("no");
  }
}
equalSums([1, 2, 3, 3]);

equalSums([1, 2]);

equalSums([1]);

equalSums([1, 2, 3]);

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
