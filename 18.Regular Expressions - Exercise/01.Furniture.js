function furniture(input) {
  let pattern =
    />>(?<furniture>[A-Z]+[a-z]*)<<(?<price>\d+[.]{0,1}\d*)!(?<quantity>\d+)/g;

  let match = pattern.exec(input);

  let sum = 0;
  let price = 0;
  let quantity = 0;

  console.log("Bought furniture:");

  while (match) {
    price = Number(match.groups.price);
    quantity = Number(match.groups.quantity);
    sum += price * quantity;
    console.log(match.groups.furniture);

    match = pattern.exec(input);
  }

  console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
console.log("-----------------------------");
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
console.log("------------------------------");
furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
