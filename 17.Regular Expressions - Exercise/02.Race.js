function race(arr) {
  let list = arr.shift();
  let namePattern = /[A-Za-z]/g;
  let digitPattern = /\d/g;

  let obj = {};

  for (const el of arr) {
    if (el === "end of race") {
      break;
    }
    let name = "";
    let matchName = namePattern.exec(el);
    while (matchName) {
      name += matchName;
      matchName = namePattern.exec(el);
    }

    let distance = 0;
    let matchDigit = digitPattern.exec(el);
    while (matchDigit) {
      distance += Number(matchDigit);
      matchDigit = digitPattern.exec(el);
    }
    if (list.includes(name)) {
      if (!obj.hasOwnProperty(name)) {
        obj[name] = distance;
      } else {
        obj[name] += distance;
      }
    }
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
