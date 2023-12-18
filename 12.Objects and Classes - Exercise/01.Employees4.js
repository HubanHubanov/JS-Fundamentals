function employees(input) {
  let obj = {};
  let arr = [];

  for (let el of input) {
    obj = {
      name: el,
      num: el.length,
    };
    arr.push(obj);
  }

  for (let el of arr) {
    console.log(`Name: ${el.name} -- Personal Number: ${el.num} `);
  }
}


employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
