function processOddNumbers(arr) {
  let res = arr
    .filter((x, i) => i % 2 === 1)
    .map((z) => z * 2)
    .reverse()
    .join(" ");

  return res;
}

console.log(processOddNumbers([10, 15, 20, 25]));
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));
