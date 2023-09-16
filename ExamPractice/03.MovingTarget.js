function movingTarget(input) {
  let targets = input.shift();

  let arr = targets.split(" ");

  let arrLength = arr.length;

  for (let line of input) {
    let [command, index, variable] = line.split(" ");

    if (command === "End") {
      console.log(arr.join("|"));
    }

    if (command === "Shoot") {
      if (index >= 0 && index < arrLength) {
        arr[index] -= variable;
      }
      if (arr[index] <= 0) {
        arr.splice(index, 1);
        arrLength -= 1;
      }
    } else if (command === "Add") {
      if (index >= 0 && index < arrLength) {
        arr.splice(index, 0, variable);
        arrLength += 1;
      } else {
        console.log("Invalid placement!");
      }
    } else if (command === "Strike") {
      let start = index - variable;
      let numToDelete = variable * 2 + 1;

      if (start >= 0 && numToDelete < arrLength) {
        if (variable >= 0) {
          arr.splice(start, numToDelete);
          arrLength -= numToDelete;
        }
      } else {
        console.log("Strike missed!");
      }
    }
  }
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

movingTarget(["1 2 3 4 5", "Strike 0 0", "End"]);
