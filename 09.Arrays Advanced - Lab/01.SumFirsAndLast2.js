function sumFirsAndLast(arr) {
  if (arr.length === 1) {
    return console.log(Number(arr.toString()));
  }

  let sum = Number(arr[0]) + Number(arr[arr.length - 1]);

  console.log(sum);
}
sumFirsAndLast(["20", "30", "40"]);
