function commonElements(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    let currElFirstArr = firstArr[i];
    for (let j = 0; j < secondArr.length; j++) {
      let currElSecondArr = secondArr[j];
      if (currElFirstArr === currElSecondArr) {
        console.log(currElFirstArr);
      }
    }
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
