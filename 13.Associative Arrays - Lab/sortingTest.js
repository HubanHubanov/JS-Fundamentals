function test(data) {
  let obj = {};

  for (let line of data) {
    let [day, name] = line.split(" ");

    if (!obj.hasOwnProperty(day)) {
      obj[day] = name;
    }
  }

  //   let key = Object.keys(obj);
  //   let sorted = key.sort((a, b) => a.localeCompare(b));

  //   for (key of sorted) {
  //     console.log(`${key} -> ${obj[key]}`);
  //   }

  let entries = Object.entries(obj);

  let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [key, value] of sorted) {
    console.log(`${key} -> ${value}`);
  }
}

test(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
