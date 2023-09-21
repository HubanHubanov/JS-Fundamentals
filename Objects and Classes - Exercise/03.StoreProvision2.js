function storeProvision(firstArr, secondArr) {
  let obj = {};

  let arr = [];

  for (let i = 0; i < firstArr.length; i += 2) {
    let currProduct = firstArr[i];
    let currProductQuantity = Number(firstArr[i + 1]);

    obj = {
      currProduct,
      currProductQuantity,
    };
    arr.push(obj);
  }

  for (let i = 0; i < secondArr.length; i += 2) {
    let currProduct = secondArr[i];
    let currProductQuantity = Number(secondArr[i + 1]);

    obj = {
      currProduct,
      currProductQuantity,
    };

    let indexOfProduct = arr.findIndex((x) => x.currProduct === currProduct);

    if (indexOfProduct === -1) {
      arr.push(obj);
    } else {
      arr[indexOfProduct].currProductQuantity += currProductQuantity;
    }
  }

  for (let el of arr) {
    console.log(`${el.currProduct} -> ${el.currProductQuantity}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
