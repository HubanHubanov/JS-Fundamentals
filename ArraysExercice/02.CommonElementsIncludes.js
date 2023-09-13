function commonElements(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    let currentInput = firstArr[i];

    if (secondArr.includes(currentInput)) {
      console.log(currentInput);
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
