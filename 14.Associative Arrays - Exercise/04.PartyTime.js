function partyTime(input) {
  let vip = [];
  let regular = [];

  let isParty = false;

  for (let line of input) {
    let firstCh = line[0];

    if (line === "PARTY") {
      isParty = true;
      continue;
    }

    if (!isParty) {
      if (isNaN(firstCh)) {
        regular.push(line);
      } else {
        vip.push(line);
      }
    } else {
      if (isNaN(firstCh)) {
        let index = regular.indexOf(line);
        regular.splice(index, 1);
      } else {
        let index = vip.indexOf(line);
        vip.splice(index, 1);
      }
    }
  }
  let fullList = vip.concat(regular);

  console.log(fullList.length);

  fullList.forEach((x) => console.log(x));
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
