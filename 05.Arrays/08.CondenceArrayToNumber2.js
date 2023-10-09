function condenceArrayToNumber(arr) {
  let res = [];

  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      let sum = arr[i] + arr[i + 1];
      res.push(sum);
    }
    arr = res;  
    res = [];
  }

  console.log(arr.toString());
}

condenceArrayToNumber([2, 10, 3]);

condenceArrayToNumber([5, 0, 4, 1, 2]);

condenceArrayToNumber([1]);
