function arraysManipulations(input) {
  let arr = input.shift().split(" ").map(Number);

  for (let el of input) {
    let [command, token1, token2] = el.split(" ");
    token1 = Number(token1);
    token2 = Number(token2);

    switch (command) {
      case "Add":
        arr.push(token1);
        break;

      case "Remove":
        arr = arr.filter((x) => x !== token1);
        break;

      case "RemoveAt":
        arr.splice(token1, 1);
        break;

      case "Insert":
        arr.splice(token2, 0, token1);
        break;
    }
  }
  console.log(arr.join(" "));
}
arraysManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
