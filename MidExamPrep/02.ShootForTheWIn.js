function shootForTheWin(arr) {
  let targets = arr.shift().split(" ").map(Number);

  let arrIndex = 0;
  let command = arr[arrIndex];

  while (command !== "End") {
    let index = Number(command);

    if (index >= targets.length || index < 0) {
      arrIndex++;
      command = arr[arrIndex];
      continue;
    }

    if (targets[index] === -1) {
      arrIndex++;
      command = arr[arrIndex];
      continue;
    }

    let reduce = targets.splice(index, 1, -1);
    reduce = Number(reduce);

    for (let i = 0; i < targets.length; i++) {
      if (targets[i] === -1) {
        continue;
      }
      if (targets[i] > reduce) {
        targets[i] -= reduce;
      } else {
        targets[i] += reduce;
      }
    }

    arrIndex++;
    command = arr[arrIndex];
  }
  let shotTargets = 0;
  for (let el of targets) {
    if (el === -1) {
      shotTargets++;
    }
  }

  console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ")}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);

shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
