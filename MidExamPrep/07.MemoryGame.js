function memoryGame(input) {
  let arr = input.shift().split(" ");

  let index = 0;
  let command = input[index];

  let counter = 0;

  while (command !== "end") {
    let [firstIndex, secondIndex] = command.split(" ").map(Number);
    counter++;

    if (
      firstIndex === secondIndex ||
      firstIndex < 0 ||
      firstIndex >= arr.length ||
      secondIndex < 0 ||
      secondIndex >= arr.length
    ) {
      console.log("Invalid input! Adding additional elements to the board");
      arr.splice(arr.length / 2, 0, `-${counter}a`, `-${counter}a`);
      index++;
      command = input[index];
      continue;
    }

    if (arr[firstIndex] === arr[secondIndex]) {
      console.log(
        `Congrats! You have found matching elements - ${arr[firstIndex]}!`
      );

      arr.splice(firstIndex, 1);
      if (firstIndex < secondIndex) {
        arr.splice(secondIndex - 1, 1);
      } else {
        arr.splice(secondIndex, 1);
      }
    } else {
      console.log("Try again!");
    }

    if (arr.length === 0) {
      return console.log(`You have won in ${counter} turns!`);
    }

    index++;
    command = input[index];
  }
  console.log("Sorry you lose :(");
  console.log(arr.join(" "));
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
// memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
