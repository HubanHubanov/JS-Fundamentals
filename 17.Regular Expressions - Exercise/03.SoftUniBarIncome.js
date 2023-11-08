function softUniBarIncome(arr) {
  let index = 0;
  let currLine = arr[index];

  let pattern =
    /%(?<customer>[A-Z][a-z]+)%[^(|$%.)]*<(?<product>\w+)>[^(|$%.)]*\|(?<count>\d+)\|[^(|$%.\d)]*(?<price>\d+[.]?\d*)\$/;

  let match = pattern.exec(currLine);

  let totalIncome = 0;

  while (currLine !== "end of shift") {
    if (match !== null) {
      let name = match.groups.customer;
      let product = match.groups.product;
      let count = +match.groups.count;
      let price = +match.groups.price;
      let totalPrice = count * price;
      totalIncome += totalPrice;
      console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
      index++;
      currLine = arr[index];
      match = pattern.exec(currLine);
      continue;
    }
    index++;
    currLine = arr[index];
    match = pattern.exec(currLine);
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);

console.log("-------------------");

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
)
