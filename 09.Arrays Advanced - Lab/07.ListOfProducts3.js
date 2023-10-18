function listOfProducts(arr) {
    let res = arr
      .sort()
      .map((x, i) => `${i + 1}.${x}`)
      .join("\n");
  
    console.log(res);
  }
  listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
  