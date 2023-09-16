function shoppingList(input) {
  let list = input.shift();
  let resArr = list.split("!");

  for (let line of input) {
    let [command, item, newItem] = line.split(" ");

    if (command === "Go") {
      break;
    }

    if (command === "Urgent") {
      if (!resArr.includes(item)) {
        resArr.unshift(item);
      }
    } else if (command === "Unnecessary") {
      if (resArr.includes(item)) {
        index = resArr.indexOf(item);
        resArr.splice(index, 1);
      }
    } else if (command === "Correct") {
      if (resArr.includes(item)) {
        index = resArr.indexOf(item);
        resArr.splice(index, 1, newItem);
      }
    } else if (command === "Rearrange") {
      if (resArr.includes(item)) {
        index = resArr.indexOf(item);
        resArr.splice(index, 1);
        resArr.push(item);
      }
    }
  }

  console.log(resArr.join(", "));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

console.log("--------------");

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
