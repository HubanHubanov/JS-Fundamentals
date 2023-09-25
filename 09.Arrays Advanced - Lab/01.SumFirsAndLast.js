function sumFirsAndLast(arr) {
  let firstNum = Number(arr.shift());
  let lastNum = Number(arr.pop());

  let sum = firstNum + lastNum;

  console.log(sum);
}
sumFirsAndLast(["20", "30", "40"]);
