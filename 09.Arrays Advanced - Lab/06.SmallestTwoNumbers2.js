function smallestTwoNumbers(arr) {
  arr.sort((a, b) => a - b);
  let res = arr.filter((_, i) => i < 2);

  console.log(res.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
