function phoneBook(arr) {
  let res = {};

  arr.forEach((line) => {
    let [name, number] = line.split(" ");
    res[name] = number;
  });

  for (let key in res) {
    console.log(`${key} -> ${res[key]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
