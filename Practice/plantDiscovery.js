function plantDiscovery(input) {
  let n = Number(input.shift());

  let plants = {};

  for (let i = 0; i < n; i++) {
    let currInput = input.shift();
    let [plant, rarity] = currInput.split("<->");

    let info = {
      rarity,
      rating: [],
    };
    plants[plant] = info;
  }

  let currCommand = input.shift();

  while (currCommand !== "Exhibition") {
    let [command, tokens] = currCommand.split(": ");

    let [plant, token] = tokens.split(" - ");

    if(!plants.hasOwnProperty(plant)) {
        console.log("error");
        currCommand = input.shift();
        continue;
    }

    switch (command) {
      case "Rate":
        let rating = Number(token);

        plants[plant].rating.push(rating);

        break;

      case "Update":
        let newRarity = Number(token);
        plants[plant].rarity = newRarity;

        break;

      case "Reset":
        plants[plant].rating = [];

        break;
    }

    currCommand = input.shift();
  }

  console.log("Plants for the exhibition:");
  for (let plant in plants) {
    let sum = 0;
    for (let el of plants[plant].rating) {
      sum += el;
    }
    let avg = sum / plants[plant].rating.length;
    if (isNaN(avg)) {
      avg = 0;
    }

    console.log(
      `- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avg.toFixed(2)}`
    );
  }
}

plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
