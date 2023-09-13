function condenceArrayToNumber(arr) {
  let newArr = [];

  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      let sum = 0;
      sum += arr[i] + arr[i + 1];
      newArr.push(sum);
    }
    arr = newArr;
    newArr = [];
  }

  console.log(arr.toString());
}

condenceArrayToNumber([2, 10, 3]);
