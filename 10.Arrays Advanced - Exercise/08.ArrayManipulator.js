function arrayManipulator(arr, commandArr) {
  let index = 0;
  let currCommand = commandArr[index];

  while (currCommand !== "print") {
    let tokens = currCommand.split(" ");
    let command = tokens.shift();

    switch (command) {
      case "add":
        let addIndex = Number(tokens[0]);
        let addEl = Number(tokens[1]);
        arr.splice(addIndex, 0, addEl);

        break;

      case "addMany":
        let addElementsIndex = Number(tokens.shift());
        let addElements = tokens.map(Number);
        arr.splice(addElementsIndex, 0, ...addElements);

        break;

      case "contains":
        let containsEl = Number(tokens[0]);
        let containsIndex = arr.indexOf(containsEl);
        console.log(containsIndex);
        break;

      case "remove":
        let removeIndex = Number(tokens[0]);
        arr.splice(removeIndex, 1);
        break;

      case "shift":
        let positions = Number(tokens[0]);
        for (let i = 0; i < positions; i++) {
          let shiftEl = arr.shift();
          arr.push(shiftEl);
        }
        break;

      case "sumPairs":
        let res = [];
        for (let i = 0; i < arr.length; i += 2) {
          let curcNum = arr[i];
          let nextNum = arr[i + 1];
          if (nextNum === undefined) {
            nextNum = 0;
          }
          let sum = curcNum + nextNum;
          res.push(sum);
        }
        arr = res;
        break;
    }

    index++;
    currCommand = commandArr[index];
  }

  console.log(`[ ${arr.join(", ")} ]`);
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);

arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
