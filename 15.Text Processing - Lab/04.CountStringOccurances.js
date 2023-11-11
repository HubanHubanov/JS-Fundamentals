function countStringOccurances(text, word) {
  let textArr = text.split(" ");

  let counter = 0;

  for (let el of textArr) {
    if (el === word) {
      counter++;
    }
  }

  console.log(counter);
}

// countStringOccurances("This is a word and it also is a sentence", "is");

countStringOccurances(
  "softuni is great place for learning new programming languages",
  "softuni"
);
