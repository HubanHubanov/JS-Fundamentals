function bombNumbers(arr, bombArr) {
  let bomb = bombArr[0];
  let power = bombArr[1];

  let indexOfBomb = arr.indexOf(bomb);

  let currIndex = 0;

  while (indexOfBomb !== -1) {
    let start = 0;
    let count = 0;
    if (currIndex === indexOfBomb) {
      if (power === 0) {
        arr.splice(currIndex, 1);
        currIndex-=1
        currIndex++;
        indexOfBomb = arr.indexOf(bomb);
        continue;
      }
      if (currIndex >= power) {
        start = currIndex - power;
        count = power * 2 + 1;
        currIndex-=start
      } else {
        start = 0;
        count = currIndex + power + 1;
      }
      arr.splice(start, count);
      currIndex-= currIndex
    }

    currIndex++;
    indexOfBomb = arr.indexOf(bomb);
  }

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);

bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);

bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
