function companyUsers(input) {
    let obj = {};
  
    let arr = [];
  
    for (let el of input) {
      let [name, id] = el.split(" -> ");
      let set = new Set();
  
      if (obj.hasOwnProperty(name)) {
        obj[name].add(id);
        obj[name] = obj[name].add(id);
        continue;
      }
  
      set.add(id);
      obj[name] = set;
    }
  
    let sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
  
    for (let key of sortedKeys) {
      console.log(key);
  
      for (let el of obj[key]) {
        console.log("--", el);
      }
    }
  }
  
  companyUsers([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345",
  ]);
  console.log("------------------");
  companyUsers([
    "SoftUni -> AA12345",
    "SoftUni -> CC12344",
    "Lenovo -> XX23456",
    "SoftUni -> AA12345",
    "Movement -> DD11111",
  ]);
  