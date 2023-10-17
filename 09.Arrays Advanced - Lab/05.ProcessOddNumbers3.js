function processOddNumbers(arr) {
  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
      res.push(2 * arr[i]);
    }
  }

  console.log(res.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
