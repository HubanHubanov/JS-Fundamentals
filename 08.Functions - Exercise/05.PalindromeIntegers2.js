function palindromeIntegers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let currNumAsString = currNum.toString();
    let palindromeNumber = currNumAsString.split("").reverse().join("");

    if (currNumAsString === palindromeNumber) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
