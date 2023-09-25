function bombNumbers(arr, bombArr) {
  let bombNum = bombArr[0];
  let bombPower = bombArr[1];

  let index = 0;

  let arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    let currNum = arr[i];

    if (currNum === bombNum) {
      if (index - bombPower >= 0) {
        arr.splice(index - bombPower, 2 * bombPower + 1);
        index = index - bombPower;
      } else {
        let x = index - bombPower;
        arr.splice(0, 2 * bombPower + 1 + x);
        index = -1;
      }
    }
    index++;
    arrLength = arr.length
  }
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [2, 2]);
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
