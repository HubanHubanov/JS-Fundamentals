function minerTask(input) {
  let restult = new Map();

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);

    if (!restult.has(resource)) {
      restult.set(resource, quantity);
    } else {
      restult.set(resource, restult.get(resource) + quantity);
    }
  }

  for (let [resource, quantity] of restult) {
    console.log(`${resource} -> ${quantity}`);
  }
}

minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);

minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
