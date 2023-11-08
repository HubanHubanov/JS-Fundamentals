function coffeeLover(data) {
  let list = data.shift().split(" ");
  let numCommands = Number(data.shift());

  for (let i = 0; i < numCommands; i++) {
    let tokens = data[i].split(" ");
    let command = tokens[0];

    if (command === "Include") {
      let coffee = tokens[1];
      list.push(coffee);
    } else if (command === "Remove") {
      let positon = tokens[1];
      let count = Number(tokens[2]);
      if (count <= list.length) {
        if (positon === "first") {
          list.splice(0, count);
        } else if (positon === "last") {
          list.splice(-count);
        }
      }
    } else if (command === "Prefer") {
      let firstIndex = Number(tokens[1]);
      let secondIndex = Number(tokens[2]);

      if (
        firstIndex >= 0 &&
        firstIndex < list.length &&
        secondIndex >= 0 &&
        secondIndex < list.length
      ) {
        let temp = list[firstIndex];
        list[firstIndex] = list[secondIndex];
        list[secondIndex] = temp;
      }
    } else if (command === "Reverse") {
      list.reverse();
    }
  }

  console.log("Coffees:")
  console.log(`${list.join(" ")}`);
}

// coffeeLover([
//   "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
//   "5",
//   "Include TurkishCoffee",
//   "Remove first 2",
//   "Remove last 1",
//   "Prefer 3 1",
//   "Reverse",
// ]);

// coffeeLover([
//   "Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",

//   "5",

//   "Include OrdinaryCoffee",

//   "Remove first 1",

//   "Prefer 0 1",

//   "Prefer 3 1",

//   "Reverse",
// ]);

coffeeLover([
  "Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
  "3",
  "Include OrdinaryCoffee",
  "Remove first 1",
  "Prefer 4 1",
]);
