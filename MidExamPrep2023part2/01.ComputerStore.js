function computerStore(arr) {
    let customerType = arr.pop();
  
    arr = arr.map(Number);
  
    let price = 0;
    for (let el of arr) {
      if (el < 0) {
        console.log("Invalid price!");
        continue;
      }
      price += el;
    }
   if(price === 0) {
      return console.log("Invalid order!" );
   } 
    console.log("Congratulations you've just bought a new computer!");
  
    console.log(`Price without taxes: ${price.toFixed(2)}$`);
    taxes = 0.2 * price;
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    let totalPrice = price + taxes;
  
    if (customerType === "regular") {
      console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    } else {
      totalPrice = 0.9 * totalPrice;
      console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
  
  }
  computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
  console.log("===================");
  computerStore(([
      'regular'
      ])
      )
  
  
  