function theLift(input) {
  let peopleNum = Number(input.shift());

  let wagons = input[0].split(" ").map(Number);

  for (let i = 0; i < wagons.length; i++) {

    if (peopleNum >= 4 - wagons[i]) {
      peopleNum -= 4 - wagons[i];
      wagons[i] = 4;
    } else {
      wagons[i] += peopleNum;
      peopleNum = 0;
    }
  }

  if (peopleNum === 0) {
    if (wagons[wagons.length - 1] < 4) {
      console.log("The lift has empty spots!");
      console.log(wagons.join(" "));
    } else {
      console.log(wagons.join(" "));
    }
  } else {
    console.log(`There isn't enough space! ${peopleNum} people in a queue!`);
    console.log(wagons.join(" "));
  }
}

theLift(["15", "0 0 0 0"]);

theLift(["20", "0 2 0"]);
