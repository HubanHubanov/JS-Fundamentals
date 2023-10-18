function train(input) {
  let trainArr = input.shift().split(" ").map(Number);
  let maxCapacity = Number(input.shift());

  for (let i = 0; i < input.length; i++) {
    let currLine = input[i].split(" ");

    if (currLine.includes("Add")) {
      trainArr.push(currLine[1]);
    } else {
      let addPassengers = Number(currLine[0]);

      for (let j = 0; j < trainArr.length; j++) {
        if (trainArr[j] + addPassengers <= maxCapacity) {
          trainArr[j] = trainArr[j] + addPassengers;
          break;
        }
      }
    }
  }

  console.log(trainArr.join(" "));
}

// train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);

train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
