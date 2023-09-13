function searchForNumber(firstArr, secondArr) {
  let [numsToTake, numsToDelete, number] = secondArr;

  let arrToTake = firstArr.slice(0, numsToTake);

  arrToTake.splice(0, numsToDelete);

  let numberCounter = 0;

  for (let i = 0; i < arrToTake.length; i++) {
    let currNum = arrToTake[i];

    if (currNum === number) {
      numberCounter++;
    }
  }

  console.log(`Number ${number} occurs ${numberCounter} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
