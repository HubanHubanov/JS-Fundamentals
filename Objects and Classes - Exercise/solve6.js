function solve(firstArr, secondArr) {
  let obj = {};

  for (let i = 0; i < firstArr.length; i += 2) {
    let currProduct = firstArr[i];
    let currProductQuantity = Number(firstArr[i + 1]);
    obj[currProduct] = currProductQuantity;
  }

  for (let i = 0; i < secondArr.length; i += 2) {
    let currProduct = secondArr[i];
    let currProductQuantity = Number(secondArr[i + 1]);

    if (!obj.hasOwnProperty(currProduct)) {
      obj[currProduct] = currProductQuantity;
    } else {
      obj[currProduct] += currProductQuantity;
    }
  }

  for (let el in obj) {
    console.log(`${el} -> ${obj[el]}`);
  }
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
