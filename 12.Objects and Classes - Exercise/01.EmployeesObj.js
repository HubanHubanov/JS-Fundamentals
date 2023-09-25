function employees(arr) {
  let obj = {};

  for (let name of arr) {
    obj[name] = name.length;
  }

  for (const name in obj) {
    console.log(`Name: ${name} -- Personal Number: ${obj[name]}`);
  }

}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
