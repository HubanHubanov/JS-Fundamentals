function theLift(arr) {
  let peopleNum = Number(arr.shift());

  let lift = arr.join(" ").split(" ").map(Number);

  for (let i = 0; i < lift.length; i++) {
    if (peopleNum === 0) {
      break;
    }
    let firstState = lift[i];
    if (firstState < 4) {
      lift[i] = Math.min(4, firstState + peopleNum);
      peopleNum -= lift[i] - firstState;
    }
  }

  if (peopleNum === 0) {
    let res = lift.filter((x) => x === 4);
    if (lift.length === res.length) {
      console.log(`${lift.join(" ")}`);
    } else {
      console.log("The lift has empty spots!");
      console.log(`${lift.join(" ")}`);
    }
  } else {
    console.log(`There isn't enough space! ${peopleNum} people in a queue!`);
    console.log(`${lift.join(" ")}`);
  }
}

theLift(["8", "0 0"]);

// theLift(["15", "0 0 0 0 0"]);

// theLift(["20", "0 2 0"]);
