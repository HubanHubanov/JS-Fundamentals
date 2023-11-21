function storage(input) {
  let obj = {};

  for (let el of input) {
    let [item, quantity] = el.split(" ");

    if (obj.hasOwnProperty(item)) {
      obj[item] += Number(quantity);
      continue;
    }

    obj[item] = Number(quantity);
  }

  for (let el in obj) {
    console.log(el, "->", obj[el]);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
console.log("-----------------");
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
