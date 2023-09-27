function storage(data) {
  let result = new Map();

  for (el of data) {
    let [name, quantity] = el.split(" ");
    quantity = Number(quantity);

    if (!result.has(name)) {
      result.set(name, quantity);
    } else {
      result.set(name, result.get(name) + quantity);
    }
  }   

  for (let [key, value] of result) {
    console.log(`${key} -> ${value}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
