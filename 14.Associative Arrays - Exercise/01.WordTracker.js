function wordTracker(input) {
  let obj = {};

  let wordsToSearch = input.shift().split(" ");

  for (let word of wordsToSearch) {
    obj[word] = 0;
    for (let el of input) {
      if (word === el) {
        obj[word] += 1;
      }
    }
  }

  let kvpEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  for (let [key, value] of kvpEntries) {
    console.log(`${key} - ${value}`);
  }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    )

    console.log("----------------------");
    wordTracker([
        'is the',
        'first', 'sentence', 'Here', 'is',
        'another', 'the', 'And', 'finally', 'the',
        'the', 'sentence'])
