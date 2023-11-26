function plantDiscovery(input) {
  let numPlants = Number(input.shift());

  let plantsArr = [];

  for (let i = 0; i < numPlants; i++) {
    let currPlant = input.shift();
    let [name, rarity] = currPlant.split("<->");
    rarity = Number(rarity);

    let found = plantsArr.find((x) => x.name === name);

    if (found) {
      found.rarity = rarity;
      continue;
    }

    let plantObj = {
      name,
      rarity: rarity,
      rating: [],
    };

    plantsArr.push(plantObj);
  }

  let command = input.shift();

  while (command !== "Exhibition") {
    let [action, tokens] = command.split(": ");
    let name = tokens.split(" - ")[0];

    let foundPlant = plantsArr.find((p) => p.name === name);

    if (!foundPlant) {
      console.log("error");

      command = input.shift();
      continue;
    }

    if (action === "Rate") {
      let rating = Number(tokens.split(" - ")[1]);
      foundPlant.rating.push(rating);
    } else if (action === "Update") {
      let newRarity = Number(tokens.split(" - ")[1]);
      foundPlant.rarity = newRarity;
    } else if (action === "Reset") {
      foundPlant.rating = [];
    }

    command = input.shift();
  }

  for (let el of plantsArr) {
    if (el.rating.length === 0) {
        let result = 0
      el.rating = result.toFixed(2);
      continue;
    }
    sum = 0;
    count = 0;
    for (let num of el.rating) {
      sum += Number(num);
      count++;
    }
    let res = sum / count
    el.rating = res.toFixed(2)
  }

    console.log("Plants for the exhibition:");
  for(let el of plantsArr) {
      console.log(`- ${el.name}; Rarity: ${el.rarity}; Rating: ${el.rating}`);
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
console.log("----------------");
plantDiscovery((["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
)
