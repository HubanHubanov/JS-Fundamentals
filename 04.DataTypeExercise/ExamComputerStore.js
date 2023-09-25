function computerStore(input) {
  let index = 0;
  let currentInput = input[index];
  let price = 0;
  let isRegular = false;

  while (currentInput !== "special" && currentInput !== "regular") {
    let partPrice = Number(currentInput);

    if (partPrice <= 0) {
      console.log("Invalid price!");
      partPrice = 0;
    }

    price += partPrice;

    index++;
    currentInput = input[index];

    if (currentInput === "regular") {
      isRegular = true;
    }
  }
  let totalPrice = 1.2 * price;

  if (totalPrice === 0) {
    console.log("Invalid order!");
  } else {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${price.toFixed(2)}$`);
    console.log(`Taxes: ${(0.2 * price).toFixed(2)}$`);
    console.log("-----------");
    if (isRegular) {
      console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    } else {
      console.log(`Total price: ${(totalPrice * 0.9).toFixed(2)}$`);
    }
  }
}

computerStore([
   '1023', 
   '15', 
   '-20',
   '-5.50',
   '450', 
   '20', 
   '17.66', 
   '19.30', 'regular'
   ])
   
