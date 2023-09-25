function oreders(product, price) {
  let totalPrice = 0;

  switch (product) {
    case "coffee":
      totalPrice = 1.5 * price;
      break;
    case "water":
      totalPrice = 1 * price;
      break;
    case "coke":
      totalPrice = 1.4 * price;
      break;
    case "snacks":
      totalPrice = 2 * price;
      break;
  }

  console.log(totalPrice.toFixed(2));
}

oreders("water", 5);
