function piccolo(data) {
  let map = new Map();

  for (let line of data) {
    let [direction, carNumber] = line.split(", ");

    if (direction === "IN") {
      map.set(carNumber, "");
    } else if (direction === "OUT") {
      map.delete(carNumber);
    }
  }

  if (map.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    let sorted = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sorted) {
      console.log(key);
    }
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
