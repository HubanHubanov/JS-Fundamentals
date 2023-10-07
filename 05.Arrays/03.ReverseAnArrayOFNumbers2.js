function reverseAnArrayOfNumbers(n, arr) {
  //   console.log(arr.splice(0, n).reverse().join(" "));

  let newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  let resArr = [];
  for (let j = newArr.length - 1; j >= 0; j--) {
    resArr.push(newArr[j]);
  }
  console.log(resArr.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
