function employees(data) {
  let res = [];

  for (let el of data) {
    let obj = {};
    obj.name = el;
    obj.personalNumber = el.length;
    res.push(obj);
  }

  for (let el of res) {
    console.log(`Name: ${el.name} -- Personal Number: ${el.personalNumber} `);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
