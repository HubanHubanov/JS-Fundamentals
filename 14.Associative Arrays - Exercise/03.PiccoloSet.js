function piccolo(data) {
  let result = new Set();

  for (let line of data) {
    let [direction, carNumber] = line.split(", ");

    if (direction === "IN") {
      result.add(carNumber);
    } else if (direction === "OUT") {
      result.delete(carNumber);
    }
  }
  if (result.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    let sorted = Array.from(result).sort((a, b) => a.localeCompare(b));
    
    sorted.forEach((el) => {
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
