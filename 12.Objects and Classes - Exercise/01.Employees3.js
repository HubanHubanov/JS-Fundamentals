function employees(data) {
    let obj = {};
    for (let el of data) {
      obj[el] = el.length;
    }
  
    let keys = Object.keys(obj);
  
    for (let key of keys) {
      console.log(`Name: ${key} -- Personal Number: ${obj[key]} `);
    }
  }
  
  employees([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
  ]);
  
  console.log("----------");
  
  employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
  