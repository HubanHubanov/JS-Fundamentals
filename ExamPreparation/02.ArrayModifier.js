function arrayModifier(data) {
  let arr = data.shift().split(" ");

  let res = arr.map((x) => Number(x));

  for (let i = 0; i < data.length; i++) {
    let [command, index1, index2] = data[i].split(" ");

    switch (command) {
      case "swap":
        let temp = res[index1];
        res[index1] = res[index2];
        res[index2] = temp;

        break;

      case "multiply":
        let product = res[index1] * res[index2];

        res[index1] = product;

        break;

      case "decrease":
        res = res.map((x) => x - 1);
        break;
    }
  }

  console.log(res.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);

arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
