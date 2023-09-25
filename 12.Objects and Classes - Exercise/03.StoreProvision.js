function storeProvision(arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i += 2) {
    currProduct = arr1[i];
    currQuantity =Number(arr1[i + 1]);

    obj[currProduct] = currQuantity;
  }
  
    for (let j = 0; j < arr2.length; j += 2) {
          currProduct2 = arr2[j];
          currQuantity2 = Number(arr2[j + 1]);
      
          obj[currProduct2] = currQuantity2;
      }
      
     
// for (let food in obj) {
//   console.log(`${food} -> ${obj[food]}`);

// }

}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
