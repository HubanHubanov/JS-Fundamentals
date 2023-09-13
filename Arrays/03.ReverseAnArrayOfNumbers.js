function reverseAnArrayOfNumbers(n, arr) {
  let res = [];
  let finalRes = [];

  for (let i = 0; i < n; i++) {
    res.push(arr[i]);
  }

  for (let i = res.length - 1; i >= 0; i--) {
    finalRes.push(res[i]);
  }

  console.log(finalRes.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
