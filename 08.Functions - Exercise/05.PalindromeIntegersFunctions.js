function palindromeIntegers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let reversedNum = reverseNumFunction(currNum);
    let res = checkPalindrome(currNum, reversedNum);
    console.log(res);

    function reverseNumFunction(num) {
      let numToString = num.toString();
      let reversed = "";
      for (let j = numToString.length - 1; j >= 0; j--) {
        reversed += numToString[j];
      }
      return reversed;
    }

    function checkPalindrome(num, numReverse) {
      return (result = num == numReverse ? "true" : "false");
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
