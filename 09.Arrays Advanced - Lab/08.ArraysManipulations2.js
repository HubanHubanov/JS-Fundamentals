function arraysManipulations(data) {

    let arr = data.shift().split(" ").map(Number)

    for(let i = 0; i <data.length; i++) {

   let [command, firstNum, secondNum] = data[i].split(" ")

    firstNum = Number(firstNum);
    secondNum = Number(secondNum)

    arr = executeCommand(command, firstNum, secondNum, arr)

}

    function executeCommand(command, firstNum, secondNum, arr) {

        switch(command) {

            case "Add": arr.push(firstNum); return arr;

            case "Remove": arr = arr.filter((el) => el !== firstNum); return arr;

            case "RemoveAt": arr.splice(firstNum, 1); return arr;

            case "Insert": arr.splice(secondNum, 0, firstNum); return arr;
        }
  }

  return arr.join(" ")

}

console.log(arraysManipulations([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3",
  ]));





