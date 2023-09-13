function train(data) {

  let arr = data.shift().split(" ").map(Number);
  let limit = Number(data.shift());

  for (let x = 0; x < data.length; x++) {
    let command = data[x].split(" ");

    if (command[0] === "Add") {

      arr.push(Number(command[1]));

    } else {

      for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] + Number(command[0]) <= limit) {
          arr[i] += Number(command[0]);
          break;
        }
      }
    }
  }
  console.log(arr.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
