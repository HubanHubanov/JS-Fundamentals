function join(arr, symbol) {
  //    let res = arr.join(`${symbol}`)

  let res = "";

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      res += arr[i] + symbol;
    }
    if (i === arr.length - 1) {
      res += arr[i];
    }
  }

  console.log(res);
}

join([1, 2, 3, 4, 5], "=>");
