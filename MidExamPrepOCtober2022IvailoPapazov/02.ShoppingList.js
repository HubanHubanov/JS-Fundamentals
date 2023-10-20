function shoppingList(arr) {
  let list = arr.shift().split("!");

  let index = 0;
  let mainCommand = arr[index];

  while (mainCommand !== "Go Shopping!") {
    let [command, product, newProduct] = mainCommand.split(" ");

    if (command === "Urgent") {
      if (!list.includes(product)) {
        list.unshift(product);
      }
    } else if (command === "Correct") {
      if (list.includes(product)) {
        let index = list.indexOf(product);
        list.splice(index, 1, newProduct);
      }
    } else if (command === "Unnecessary") {
      let idx = list.indexOf(product);
      if (idx !== -1) {
        list.splice(idx, 1);
      }
    } else if (command === "Rearrange") {
      if (list.includes(product)) {
        let i = list.indexOf(product);
        let item = list.splice(i, 1);
        list.push(item);
      }
    }

    index++;
    mainCommand = arr[index];
  }

  console.log(list.join(", "));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
