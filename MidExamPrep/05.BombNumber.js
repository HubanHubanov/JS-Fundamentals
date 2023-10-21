function bombNumber(arr, bombArr) {
  let bomb = bombArr.shift();
  let power = bombArr.shift();

  let bombIndex = arr.indexOf(bomb);

  while (bombIndex !== -1) {
    let startToSpliceIndex = Math.max(0, bombIndex - power);
    let numsToSplice = 2 * power + 1;
    if(bombIndex - power < 0) {
      numsToSplice = 2 * power + 1 + (bombIndex - power)
    }
    arr.splice(startToSpliceIndex, numsToSplice);
    bombIndex = arr.indexOf(bomb);
  }
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }

  console.log(sum);
}

bombNumber([2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumber([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumber([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
