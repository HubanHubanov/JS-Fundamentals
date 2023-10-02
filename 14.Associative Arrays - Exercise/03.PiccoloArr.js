function piccolo(data) {
  let arr = [];

  for (let line of data) {
    let [direction, carNumber] = line.split(", ");

    if (direction === "IN") {
      if (!arr.includes(carNumber)) {
        arr.push(carNumber);
      }
    } else if (direction === "OUT") {
      //   let indexToDelete = arr.findIndex((x) => x === carNumber);
      if (arr.includes(carNumber)) {
        let indexToDelete = arr.indexOf(carNumber);
        arr.splice(indexToDelete, 1);
      }
    }
  }

  if (arr.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    arr.sort();

    arr.forEach((el) => {
      console.log(el);
    });
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
console.log("-----------------");
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
