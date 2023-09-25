function palindromeIntegers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let currNumAsString = currNum.toString();
    let number = "";
    let palindromeNumber = "";
    for (n = 0; n < currNumAsString.length; n++) {
      number += currNumAsString[n];
    }
    for (p = currNumAsString.length - 1; p >= 0; p--) {
      palindromeNumber += currNumAsString[p];
    }

    if (number === palindromeNumber) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
console.log("-------------------");
palindromeIntegers([32, 2, 232, 1010]);
