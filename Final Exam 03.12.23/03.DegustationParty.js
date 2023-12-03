function degustationParty(input) {
  let index = 0;
  let lineOfInput = input[index];

  let guestsCollection = {};
  let unlikedMeals = 0;

  while (lineOfInput !== "Stop") {
    let [command, guest, meal] = lineOfInput.split("-");

    if (command === "Like") {
      if (!guestsCollection.hasOwnProperty(guest)) {
        guestsCollection[guest] = [meal];
      } else {
        if (!guestsCollection[guest].includes(meal)) {
          guestsCollection[guest].push(meal);
        }
      }
    } else if (command === "Dislike") {
      if (!guestsCollection.hasOwnProperty(guest)) {
        console.log(`${guest} is not at the party.`);
        index++;
        lineOfInput = input[index];
        continue;
      }
      if (!guestsCollection[guest].includes(meal)) {
        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
        index++;
        lineOfInput = input[index];
        continue;
      }

      guestsCollection[guest] = guestsCollection[guest].filter(
        (x) => x !== meal
      );

      unlikedMeals++;
      console.log(`${guest} doesn't like the ${meal}.`);
    }

    index++;
    lineOfInput = input[index];
  }

  for (let guest in guestsCollection) {
    console.log(`${guest}: ${guestsCollection[guest].join(", ")}`);
  }
  console.log(`Unliked meals: ${unlikedMeals}`);
}


// degustationParty([
//   "Like-Krisi-shrimps",
//   "Like-Krisi-soup",
//   "Like-Krisi-soup",
//   "Like-Penelope-dessert",
//   "Like-Misho-salad",
//   "Stop",
// ]);
// console.log("---------------");
// degustationParty([
//   "Like-Krisi-shrimps",

//   "Dislike-Vili-carp",

//   "Dislike-Krisi-salad",

//   "Stop",
// ]);
console.log("----------------------");
degustationParty(["Like-Katy-fish", "Dislike-Katy-fish", "Stop"]);
