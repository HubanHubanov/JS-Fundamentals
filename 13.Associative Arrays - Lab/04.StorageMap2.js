function storage(input) {
  let res = new Map();

  for (let el of input) {
    let [item, quantity] = el.split(" ");
    quantity = Number(quantity);

    if (res.has(item)) {
      let num = res.get(item) + quantity;
      res.set(item, num);
      continue;
    }

    res.set(item, quantity);
  }

  for (let el of res) {
    console.log(el.join(" -> "));
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
console.log("-----------------");
storage(["apple 50", "apple 61", "coffee 115", "apple 9", "coffee 40"]);
