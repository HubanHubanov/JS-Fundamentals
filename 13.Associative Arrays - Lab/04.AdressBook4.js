function adressBook(input) {
    let obj = {};
  
    for (let el of input) {
      let tokens = el.split(":");
      let name = tokens[0];
      let adress = tokens[1];
  
      obj[name] = adress;
    }
  
    let entries = Object.entries(obj);
    let entriesSorted = entries.sort(([keyA, valueA], [keyB, valueB]) =>
      keyA.localeCompare(keyB)
    );
  
    for (let [key, value] of entries) {
      console.log(`${key} -> ${value}`);
    }
  }

  adressBook([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",
  ]);
  