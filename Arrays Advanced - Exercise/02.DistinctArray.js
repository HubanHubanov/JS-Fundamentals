function distinctArray(arr) {
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];

    if (resArr.includes(currNum)) {
      continue;
    }

    resArr.push(currNum);
  }

  return resArr.join(" ");
}

console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));
console.log(distinctArray([1, 2, 3, 4]));
