function wordTracker(input) {
  let map = new Map();

  let wordsToSearch = input.shift().split(" ");

  for (let word of wordsToSearch) {
    map.set(word, 0);
    for (let el of input) {
      if (word === el) {
        map.set(word, map.get(word) + 1);
      }
    }
  }

  let arr = Array.from(map.entries());

  let sorted = arr.sort((a, b) => b[1] - a[1]);

  for (let [key, value] of sorted) {
    console.log(`${key} - ${value}`);
  }
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

console.log("----------------------");
wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
