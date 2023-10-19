function searchForNumber(firstArr, secondArr) {
  let elToTake = secondArr.shift();
  let elTodelete = secondArr.shift();
  let searchedNum = secondArr.shift();

  let thirdArr = firstArr.splice(0, elToTake);
  thirdArr.splice(0, elTodelete);
  let counter = 0;
  for (let el of thirdArr) {
    if (el === searchedNum) {
      counter++;
    }
  }

  console.log(`Number ${searchedNum} occurs ${counter} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
