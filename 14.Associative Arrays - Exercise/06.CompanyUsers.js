function companyUsers(data) {
  let res = {};
  let arr = [];

  for (let line of data) {
    let [companyName, employeeId] = line.split(" -> ");
    if (arr.includes(line)) {
      continue;
    }
    arr.push(line);

    if (!res.hasOwnProperty(companyName)) {
      res[companyName] = employeeId;
    } else {
      res[companyName] = res[companyName] + " , " + employeeId;
    }
  }

  let sorted = Object.entries(res).sort();

  for (let [companyName, employeeId] of sorted) {
    console.log(companyName);
    for (let el of employeeId.split(" , ")) {
      console.log(`-- ${el}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
console.log("---------------");

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
