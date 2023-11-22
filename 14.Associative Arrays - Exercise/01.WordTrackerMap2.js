function wordTracker(arr) {
  let wordsToSearch = arr.shift().split(" ");

  let myMap = new Map();

  for (let word of wordsToSearch) {
    myMap.set(word, 0);
  }

  for (let el of arr) {
    if (myMap.has(el)) {
      let num = myMap.get(el);
      num += 1;
      myMap.set(el, num);
    }
  }

  let mapArr = Array.from(myMap.entries());

  let sorted = mapArr.sort((a, b) => b[1] - a[1]);

  for (let [key, value] of sorted) {
    console.log(key, "-", value);
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
