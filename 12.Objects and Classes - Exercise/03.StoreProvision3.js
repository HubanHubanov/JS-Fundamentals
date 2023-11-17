function storeProvision(stock, order) {
  let obj = {};

  for (let i = 0; i < stock.length; i += 2) {
    let currProduct = stock[i];
    let currQuantity = Number(stock[i + 1]);
    obj[currProduct] = currQuantity;
  }
  for (let i = 0; i < order.length; i += 2) {
    let currProduct = order[i];
    let currQuantity = Number(order[i + 1]);
    if (!obj.hasOwnProperty(currProduct)) {
      obj[currProduct] = 0;
    }
    obj[currProduct] += currQuantity;
  }

  let entries = Object.entries(obj);

  for (let [product, quantity] of entries) {
    console.log(`${product} -> ${quantity}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
