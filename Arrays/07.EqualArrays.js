function equalArrays(firstArray, secondArray) {
  let sum = 0;
  let notIdentical = false;

  for (let i = 0; i < firstArray.length; i++) {
    for (let s = 0; s < secondArray.length; s++) {
      if (i === s) {
        if (firstArray[i] === secondArray[s]) {
          sum += Number(firstArray[i]);
        } else {
          console.log(
            `Arrays are not identical. Found difference at ${i} index`
          );
          notIdentical = true;
          break;
        }
      }
    }
    if(notIdentical) {
        break;
    }
  }

  if (!notIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
console.log("--------------------");
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
console.log("----------");
equalArrays(["1"], ["10"]);
