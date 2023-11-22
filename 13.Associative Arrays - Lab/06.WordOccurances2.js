function wordOccurances(input) {
  let obj = {};

  for (let word of input) {
    if (!obj.hasOwnProperty(word)) {
      obj[word] = 1;
    } else {
      obj[word] += 1;
    }
  }

  let entries = Object.entries(obj);
  let sorted = entries.sort((a, b) => b[1] - a[1]);

  for (let [word, num] of sorted) {
    console.log(word, "->", num, "times");
  }
}

wordOccurances([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);

wordOccurances(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
