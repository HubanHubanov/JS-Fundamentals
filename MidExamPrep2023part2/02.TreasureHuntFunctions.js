function treasureHunt(input) {
  let chest = input.shift().split("|");

  let index = 0;
  let currLine = input[index];

  while (currLine !== "Yohoho!") {
    let tokens = currLine.split(" ");
    let command = tokens.shift();

    if (command === "Loot") {
      loot(chest, tokens);
    } else if (command === "Drop") {
      drop(chest, tokens);
    } else if (command === "Steal") {
      steal(chest, tokens);
    }

    function loot(arr, tokens) {
      for (let el of tokens) {
        if (!chest.includes(el)) {
          chest.unshift(el);
        }
      }
    }

    function drop(arr, tokens) {
      let index = Number(tokens[0]);
      if (index >= 0 && index < chest.length) {
        let add = chest.splice(index, 1);
        chest.push(add);
      }
    }

    function steal(arr, tokens) {
      let count = Number(tokens[0]);
      let stolenItems = chest.splice(-count);
      console.log(stolenItems.join(", "));
    }

    index++;
    currLine = input[index];
  }

  let sum = 0;
  for (num of chest) {
    sum += num.length;
  }

  let averageGain = sum / chest.length;

  if (chest.length === 0) {
    console.log("Failed treasure hunt.");
  } else {
    console.log(
      `Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`
    );
  }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
console.log("------------------------");
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
