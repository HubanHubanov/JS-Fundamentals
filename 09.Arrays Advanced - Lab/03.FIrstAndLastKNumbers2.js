function firstAndLastKNumbets(arr) {
let k = arr.shift()

  let firstKNums = arr.slice(0, k);
  let lastKnums = arr.slice(-k);

  console.log(firstKNums.join(" "));
  console.log(lastKnums.join(" "));
}

firstAndLastKNumbets([3, 6, 7, 8, 9]);
