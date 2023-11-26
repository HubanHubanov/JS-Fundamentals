function activationKeys(input) {
  let key = input.shift();

  let index = 0;
  let lineOfInput = input[index];

  while (lineOfInput !== "Generate") {
    let tokens = lineOfInput.split(">>>");
    let command = tokens.shift();

    if (command === "Slice") {
      let startIndex = Number(tokens[0]);
      let endIndex = Number(tokens[1]);
      let firstWord = key.substring(0, startIndex);
      let secondWord = key.substring(endIndex);
      key = firstWord.concat(secondWord);
      console.log(key);
    } else if (command === "Flip") {
      let upLow = tokens[0];
      let start = Number(tokens[1]);
      let end = Number(tokens[2]);

      let startWord = key.substring(0, start);
      let endWord = key.substring(end);
      let middleWord = key.substring(start, end);

      if (upLow === "Upper") {
        middleWord = middleWord.toUpperCase();
      } else if (upLow === "Lower") {
        middleWord = middleWord.toLowerCase();
      }

      key = startWord + middleWord + endWord;
      console.log(key);
    } else if (command === "Contains") {
      let substr = tokens[0];
      if (key.includes(substr)) {
        console.log(`${key} contains ${substr}`);
      } else {
        console.log("Substring not found!");
      }
    }

    index++;
    lineOfInput = input[index];
  }

  console.log(`Your activation key is: ${key}`);

}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
// activationKeys([
//   "134softsf5ftuni2020rockz42",
//   "Slice>>>3>>>7",
//   "Contains>>>-rock",
//   "Contains>>>-uni-",
//   "Contains>>>-rocks",
//   "Flip>>>Upper>>>2>>>8",
//   "Flip>>>Lower>>>5>>>11",
//   "Generate",
// ]);
