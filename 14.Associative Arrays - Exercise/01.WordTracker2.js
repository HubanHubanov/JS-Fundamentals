function wordTracker(arr) {
  let wordsToSearch = arr.shift().split(" ");

  let obj = {};

  for (let word of wordsToSearch) {
    obj[word] = 0;
  }

  for (let el of arr) {
    if (obj.hasOwnProperty(el)) {
      obj[el] += 1;
    }
  }

  let entriesSorted = Object.entries(obj).sort(
    ([keyA, valueA], [keyB, valueB]) => valueB - valueA
  );

  for (let [word, num] of entriesSorted) {
    console.log(word, "-", num);
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
