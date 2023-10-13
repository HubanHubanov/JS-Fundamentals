function palindromeIntegers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];

    let reversedNum = String(currNum).split("").reverse().join("");

    if (currNum == reversedNum) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
