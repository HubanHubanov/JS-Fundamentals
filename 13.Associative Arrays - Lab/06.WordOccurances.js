function wordOccurances(input) {
  let obj = {};

  for (let word of input) {
    if (!obj.hasOwnProperty(word)) {
      obj[word] = 1;
    } else {
      obj[word] += 1;
    }
  }

  let sortedEntries = Object.entries(obj).sort(
    ([keyA, valueA], [keyB, valueB]) => valueB - valueA
  );

  for (let [key, value] of sortedEntries) {
    console.log(`${key} -> ${value} times`);
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
