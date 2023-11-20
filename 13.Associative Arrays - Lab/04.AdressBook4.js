function adressBook(input) {
    let book = {};
  
    for (let el of input) {
      let [name, address] = el.split(":");
      book[name] = address;
    }
    let sortedKeys = Object.keys(book).sort((a, b) => a.localeCompare(b));
  
    for (let key of sortedKeys) {
      console.log(key, "->", book[key]);
    }
  }

  adressBook([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",
  ]);
  