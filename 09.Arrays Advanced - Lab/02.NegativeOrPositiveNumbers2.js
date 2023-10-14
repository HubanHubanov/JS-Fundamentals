function negativeOrPositiveNumbers(arr) {
  let res = [];
  for (let el of arr) {
    if (el >= 0) {
      res.push(el);
    } else {
      res.unshift(el);
    }
  }
  console.log(res.join("\n"));
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
