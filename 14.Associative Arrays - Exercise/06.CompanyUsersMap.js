function companyUsers(input) {
    let map = new Map();
  
    let arr = [];
  
    for (let el of input) {
      let [name, id] = el.split(" -> ");
      arr = [];
  
      if (map.has(name)) {
        let value = map.get(name);
  
        if (!value.includes(id)) {
          value.push(id);
  
          map.set(name, value);
          console.log(map);
          continue;
        } else {
          continue;
        }
      }
  
      arr.push(id);
      map.set(name, arr);
    }
  
    let sortedArr = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));
  
    for (let el of sortedArr) {
      console.log(el[0]);
      for (let line of el[1]) {
        console.log(`-- ${line}`);
      }
    }
  }
  
  companyUsers([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345",
  ]);
  console.log("---------------------");
  companyUsers([
    "SoftUni -> AA12345",
    "SoftUni -> CC12344",
    "Lenovo -> XX23456",
    "SoftUni -> AA12345",
    "Movement -> DD11111",
  ]);
  