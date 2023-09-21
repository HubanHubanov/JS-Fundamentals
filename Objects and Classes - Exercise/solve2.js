function employees(input) {
  let obj = {};

  for (let name of input) {
    obj[name] = name.length;
  }

  for (name in obj) {
    console.log(`Name: ${name} -- Personal Number: ${obj[name]}`);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
