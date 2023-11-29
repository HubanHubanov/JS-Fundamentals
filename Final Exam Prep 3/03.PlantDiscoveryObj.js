function plantDiscovery(input) {
  let numPlants = Number(input.shift());

  let plantsCollection = {};

  for (let i = 0; i < numPlants; i++) {
    let currPlantInfo = input.shift();
    let [name, rarity] = currPlantInfo.split("<->");
    let rating = [];

    let info = {
      rarity: Number(rarity),
      rating,
    };

    plantsCollection[name] = info;
  }

  

  let currCommand = input.shift();

  while (currCommand !== "Exhibition") {
    let [command, tokens] = currCommand.split(": ");
    tokens = tokens.split(" - ");
    let name = tokens.shift();

    if(!plantsCollection.hasOwnProperty(name)) {
        currCommand = input.shift();
        console.log("error");
        continue
    }

    switch (command) {
      case "Rate":
        let addedRating = Number(tokens[0]);
        plantsCollection[name].rating.push(addedRating);

        break;

      case "Update":
        let newRarity = Number(tokens[0]);
        plantsCollection[name].rarity = newRarity;
        break;

      case "Reset":
        plantsCollection[name].rating = [];

        break;
    }
    currCommand = input.shift();
  }

  console.log("Plants for the exhibition:");
  for (let plant in plantsCollection) {
    let avg = 0;
    if (plantsCollection[plant].rating.length > 0) {
      let sum = 0;
      let count = 0;

      for (let el of plantsCollection[plant].rating) {
        count++;
        sum += el;
      }
      avg = sum / count;
      plantsCollection[plant].rating = avg.toFixed(2);
    } else {
      plantsCollection[plant].rating = avg.toFixed(2);
    }

    console.log(
      `- ${plant}; Rarity: ${plantsCollection[plant].rarity}; Rating: ${plantsCollection[plant].rating}`
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
  "Rate: Woodiiiiii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
console.log("----------------");
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
