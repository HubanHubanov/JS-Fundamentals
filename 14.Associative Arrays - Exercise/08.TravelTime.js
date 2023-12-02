function travelTime(input) {
  let obj = {};
  let arr = [];

  for (let el of input) {
    let [country, town, cost] = el.split(" > ");
    cost = Number(cost);

    let foundCountry = arr.find((c) => c.country === country);

    if (foundCountry) {
      let foundTown = arr.find((x) => x.town === town);
      if (foundTown) {
        let res = foundTown.cost < cost ? foundTown.cost : cost;
        foundTown.cost = res;
      } else {
        obj = { country, town, cost: cost };
        arr.push(obj);
      }
    } else {
      obj = { country, town, cost: cost };
      arr.push(obj);
    }
  }

  arr.sort((a, b) => {
    let res = a.country.localeCompare(b.country);
    if (res === 0) {
      res = a.cost - b.cost;
    }
    return res;
  });

  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let currCountry = arr[i].country;
    let currTown = arr[i].town;
    let currCost = arr[i].cost;

    if (i === 0) {
      result[currCountry] = [`${currTown} -> ${currCost}`];
      continue;
    }

    if (i > 0) {
      if (currCountry === arr[i - 1].country) {
        result[currCountry].push(`${currTown} -> ${currCost}`);
      } else {
        result[currCountry] = [`${currTown} -> ${currCost}`];
      }
    }
  }

  for (let country in result) {
    console.log(`${country} -> ${result[country].join(" ")}`);
  }
}

// travelTime([
//   "Bulgaria > Sofia > 500",
//   "Bulgaria > Sopot > 800",
//   "France > Paris > 2000",
//   "Albania > Tirana > 1000",
//   "Bulgaria > Sofia > 200",
// ]);
// console.log("--------------------");
// travelTime([
//   "Bulgaria > Sofia > 25000",
//   "Bulgaria > Sofia > 25000",
//   "Kalimdor > Orgrimar > 25000",
//   "Albania > Tirana > 25000",
//   "Bulgaria > Varna > 25010",
//   "Bulgaria > Lukovit > 10",
// ]);
// console.log("--------------");
travelTime([
  "Bulgaria > Sofia > 25000",
  "aaa > Sofia > 1",
  "aa > Orgrimar > 0",
  "Albania > Tirana > 25000",
  "zz > Aarna > 25010",
  "Bulgaria > Lukovit > 10",
]);
