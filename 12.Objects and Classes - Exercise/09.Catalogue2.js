function catalogue(arr) {
  let sorted = arr.sort((a, b) => a.localeCompare(b));

  let res = [];
  let obj = {};

  for (let i = 0; i < sorted.length; i++) {
    let currLine = sorted[i];
    let nextLine = sorted[i +1];
    let [key, value] = sorted[i].split(" : ");

    obj[key] = value;

  

    if(i === sorted.length - 1) {
        res.push(obj)
        
    } else if  (currLine[0] !== nextLine[0]) {
      res.push(obj);
      obj = {}
    }
  }

  for (let el of res) {
    let keys = Object.keys(el)

    
console.log(keys[0][0]);

for (let key of keys) {
    console.log(`  ${key}: ${el[key]}`);
}


  }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    );

// catalogue([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
//     ]
//     )
