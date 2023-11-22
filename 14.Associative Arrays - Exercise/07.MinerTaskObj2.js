function minerTask(input) {
  let res = {};

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);

    if (res.hasOwnProperty(resource)) {
      res[resource] += quantity;
      continue;
    }

    res[resource] = quantity;
  }

  for (let resource in res) {
    console.log(resource, "->", res[resource]);
  }
}

minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
