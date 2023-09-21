function employees(arr) {
  let restArr = [];

  for (let line of arr) {
    let obj = {
      name: line,
      personalNumber: line.length,
    };
console.log(obj);
    restArr.push(obj);
  }
//   restArr.forEach((x) =>
//     console.log(`Name: ${x.name} -- Personal Number: ${x.personalNumber}`)
//   );
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
