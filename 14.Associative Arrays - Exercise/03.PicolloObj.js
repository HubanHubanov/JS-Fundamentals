function piccolo(data) {
  let obj = {};

  for (let line of data) {
    let [direction, carNumber] = line.split(", ");

    if (direction === "IN") {
      obj[carNumber] = "";
    } else if (direction === "OUT") {
      delete obj[carNumber];
    }
  }

  let sortEntries = Object.entries(obj).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  if (sortEntries.length === 0) {
    console.log("Parking Lot is Empty");
  }

  for (let [key, value] of sortEntries) {
    console.log(key);
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
