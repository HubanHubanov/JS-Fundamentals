function commonElements(firstArr, secondArr) {
  let firstArrLength = firstArr.length;
  let secondArrLength = secondArr.length;

  for (let i = 0; i < firstArrLength; i++) {
    for (let s = 0; s < secondArrLength; s++) {
      if (firstArr[i] === secondArr[s]) {
        console.log(firstArr[i]);
      }
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
console.log("----------");
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
