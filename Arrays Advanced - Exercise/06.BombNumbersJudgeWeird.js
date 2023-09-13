function bombNumbers(arr, bombArr) {
  let [bomb, power] = bombArr;

  let indexOFBomb = arr.indexOf(bomb);

  while (indexOFBomb !== -1) {
    let startSplice = Math.max(0, indexOFBomb - power);
    // let spliceCount = 2 * power + 1; // shows wrong result but Judge gives 100/100 (shows sum = 0)
    let spliceCount = indexOFBomb - power > 0 ? 2 * power + 1 : 2 * power +1 + indexOFBomb - power // (shows sum = 9)

    arr.splice(startSplice, spliceCount);

    indexOFBomb = arr.indexOf(bomb);
  }
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  console.log(sum);
}

bombNumbers([1, 2, 1, 4, 9], [2, 2]);
