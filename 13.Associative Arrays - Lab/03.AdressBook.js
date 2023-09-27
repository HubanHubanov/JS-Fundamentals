function adressBook(data) {
  let result = {};

  data.forEach((line) => {
    let [name, adress] = line.split(":");
    result[name] = adress;
  });

  let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));

  for (key of sorted) {
    console.log(`${key} -> ${result[key]}`);
  }
}

adressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
