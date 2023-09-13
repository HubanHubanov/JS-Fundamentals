function magicSum(arr, magicSum) {
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    for (let s = i + 1; s < arr.length; s++) {
      let nextNum = arr[s];

      if (currNum + nextNum === magicSum) {
        console.log(`${currNum} ${nextNum}`);
      }
    }
  }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
