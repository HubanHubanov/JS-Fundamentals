function addAndSubstract(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = Number(arr[i]);
    let newNumber = 0;

    if (currentNumber % 2 === 0) {
      newNumber += currentNumber + i;
    } else {
      newNumber = currentNumber - i;
    }

    res.push(newNumber);
  }

  console.log(res);

  let firtsArrSum = 0;
  for (let firtsArrNum of arr) {
    firtsArrSum += firtsArrNum;
  }

  console.log(firtsArrSum);

  let secondArrSum = 0;
  for (let secondArrNum of res) {
    secondArrSum += secondArrNum;
  }

  console.log(secondArrSum);
}

addAndSubstract([5, 15, 23, 56, 35]);
console.log("--------------");
addAndSubstract([-5, 11, 3, 0, 2]);
