function minerTask(input) {
    let res = new Map();
  
    for (let i = 0; i < input.length; i += 2) {
      let resource = input[i];
      let quantity = Number(input[i + 1]);
  
      if (res.has(resource)) {
        res.set(resource, res.get(resource) + quantity);
        continue;
      }
  
      res.set(resource, quantity);
    }
  
    for (let [key, value] of res) {
      console.log(key, "->", value);
    }
  }
  
  minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
  minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
  