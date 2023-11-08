function race(arr) {
  let list = arr.shift().split(", ");
  let namePattern = /[A-Za-z]/g;
  let digitPattern = /\d/g;

  let obj = {};

  for (const name of list) {
    obj[name] = 0;
  }

  let currentRow = arr.shift();

  while (currentRow !== "end of race") {
    let sum = 0;

    let currName = currentRow.match(namePattern).join("");
    let currNumber = currentRow.match(digitPattern);

    for (const num of currNumber) {
      sum += Number(num);
    }
    if (obj.hasOwnProperty(currName)) {
      obj[currName] += sum;
    }

    currentRow = arr.shift();
  }

  let entries = Object.entries(obj);
  let sort = entries.sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${sort[0][0]}`);
  console.log(`2nd place: ${sort[1][0]}`);
  console.log(`3rd place: ${sort[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);

console.log("------------------");

race([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);
