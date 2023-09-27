function storage(data) {
  let obj = {};

  for (let el of data) {
    let [product, quantity] = el.split(" ");

    if (!obj.hasOwnProperty(product)) {
      obj[product] = Number(quantity);
    } else {
      obj[product] += Number(quantity);
    }
  }

  //   for (let key in obj) {
  //     console.log(`${key} -> ${obj[key]}`);
  //   }

  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${value}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
