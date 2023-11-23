function companyUsers(input) {
  let obj = {};

  let arr = [];

  for (let el of input) {
    let [name, id] = el.split(" -> ");
    arr = [];

    if (obj.hasOwnProperty(name)) {
      let value = obj[name];
      if (!value.includes(id)) {
        value.push(id);

        obj[name] = value;

        continue;
      } else {
        continue;
      }
    }

    arr.push(id);
    obj[name] = arr;
  }

  let sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));

  for (let key of sortedKeys) {
    console.log(key);

    for (let el of obj[key]) {
      console.log("--", el);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
console.log("------------------");
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
