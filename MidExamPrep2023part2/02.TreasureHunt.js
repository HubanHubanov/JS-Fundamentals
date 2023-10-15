function treasureHunt(input) {
  let chest = input.shift().split("|");

  let index = 0;
  let currLine = input[index];

  while (currLine !== "Yohoho!") {
    let tokens = currLine.split(" ");
    let command = tokens.shift();

    if (command === "Loot") {
      for (let el of tokens) {
        if (!chest.includes(el)) {
          chest.unshift(el);
        }
      }
    } else if (command === "Drop") {
      let index = Number(tokens[0]);
      if (index >= 0 && index < chest.length) {
        let add = chest.splice(index, 1);
        chest.push(add);
      }
    } else if (command === "Steal") {
      let count = Number(tokens[0]);
      let stolenItems = chest.splice(-count);
      console.log(stolenItems.join(", "));
    }

    index++;
    currLine = input[index];
  }
  let sum = 0;
  let count = 0;
  for (num of chest) {
    count++;
    sum += num.length;
  }

  let averageGain = sum / count;

  if (chest.length === 0) {
    console.log("Failed treasure hunt.");
  } else {
    console.log(
      `Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`
    );
  }
}

// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
// "Loot Wood Gold Coins",
// "Loot Silver Pistol",
// "Drop 3",
// "Steal 3",
// "Yohoho!"])

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
