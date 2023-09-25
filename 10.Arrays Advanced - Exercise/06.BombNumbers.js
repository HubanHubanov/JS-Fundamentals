function bombNumbers(arr, bombArr) {
  let bombNum = bombArr[0];
  let bombPower = bombArr[1];

  for (let index = 0; index < arr.length; index++) {
    let currNum = arr[index];

    if (currNum === bombNum) {
      if (bombPower === 0) {
        arr.splice(index, 1);
        index = index - 1;
        continue;
      }

      if (index - bombPower >= 0) {
        arr.splice(index - bombPower, 2 * bombPower + 1);
        index = index - bombPower;
      } else {
        let x = index - bombPower;
        arr.splice(0, 2 * bombPower + 1 + x);
        index = -1;
      }
    }
  }
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 0]);
bombNumbers([1, 2, 2, 9], [2, 0]);
bombNumbers([1, 2, 2, 2, 2, 2, 9], [2, 0]);
bombNumbers([1, 2, 2, 2, 2, 2, 9], [2, 2]);
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [2, 2]);
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
