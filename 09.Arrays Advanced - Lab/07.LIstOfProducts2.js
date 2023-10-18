function listOfProducts(arr) {
  arr.sort();
  let counter = 0;
  for (let el of arr) {
    let res = "";
    counter++;
    res = `${counter}.${el}`;

    console.log(res);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
