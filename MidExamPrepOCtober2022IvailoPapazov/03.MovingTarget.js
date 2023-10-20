function movingTarget(input) {
  let targets = input.shift().split(" ").map(Number);
  let inputIndex = 0;
  let mainCommand = input[inputIndex];

  while (mainCommand !== "End") {
    let [command, index, token] = mainCommand.split(" ");

    switch (command) {
      case "Shoot":
        index = Number(index);
        let power = Number(token);
        if (index >= 0 && index < targets.length) {
          targets[index] -= power;
        }
        if (targets[index] <= 0) {
          targets.splice(index, 1);
        }

        break;

      case "Add":
        index = Number(index);
        let value = Number(token);

        if (index >= 0 && index < targets.length) {
          targets.splice(index, 0, value);
        } else {
          console.log("Invalid placement!");
        }

        break;

      case "Strike":
        index = Number(index);
        let radius = Number(token);
        let startIndex = index - radius;
        let count = 2 * radius + 1;

        if (startIndex >= 0 && index < targets.length) {
          targets.splice(startIndex, count);
        } else {
          console.log("Strike missed!");
        }

        break;
    }

    inputIndex++;
    mainCommand = input[inputIndex];
  }

  console.log(targets.join("|"));
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);

movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
