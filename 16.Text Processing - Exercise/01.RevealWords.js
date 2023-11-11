function revealWords(wordsString, string) {
  let words = wordsString.split(", ");

  let stringArr = string.split(" ");

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i].includes("*")) {
      for (let word of words) {
        if (stringArr[i].length === word.length) {
          stringArr[i] = word;
        }
      }
    }
  }
  console.log(stringArr.join(" "));
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
