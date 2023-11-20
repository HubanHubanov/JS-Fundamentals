function phoneBook(arr) {
  let res = {};

  for (let el of arr) {
    let [name, number] = el.split(" ");
    res[name] = number;
  }

  let entries = Object.entries(res);
  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);

phoneBook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
