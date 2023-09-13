function negativeOrPositiveNumbers(array) {
  let newArr = new Array();

  for (let index = 0; index < array.length; index++) {
    let element = array[index];

    if (element < 0) {
      newArr.unshift(element);
    } else {
      newArr.push(element);
    }
  }
  let result = newArr.join("\n");

  console.log(result);
}

negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
console.log("--------------------------------------");
negativeOrPositiveNumbers(["3", "-2", "0", "-1"]);
