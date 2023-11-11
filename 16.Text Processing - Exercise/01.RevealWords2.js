function revealWords(wordsString, string) {
  let words = wordsString.split(", ");

  for (let word of words) {
    let wordToReplace = "*".repeat(word.length);

    string = string.replace(wordToReplace, word);
  }

  console.log(string);
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
