function catalogue(input) {


    let sorted = input.sort((a,b) => a.localeCompare(b))
    let obj = {}


   sorted.forEach((el) => {

    let key = el[0]

    obj[key] = el
    
   
})
console.log(obj);








}

catalogue(["Omlet : 5.4", "Shirt : 15", "Shoes : 50", "Cake : 59"]);

// console.log("--------------------");

// catalogue([
//   "Appricot : 20.4",
//   "Fridge : 1500",
//   "TV : 1499",
//   "Deodorant : 10",
//   "Boiler : 300",
//   "Apple : 1.25",
//   "Anti-Bug Spray : 15",
//   "T-Shirt : 10",
// ]);
