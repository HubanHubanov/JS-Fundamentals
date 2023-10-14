function firstAndLastKnumbers(arr) {

  let k = arr[0];

  let firstLine = arr.slice(1, k + 1);

  console.log(firstLine.join(" "));

  let secondLine = arr.slice(-k);

  console.log(secondLine.join(" "));
  
}

firstAndLastKnumbers([2, 7, 8, 9]);
firstAndLastKnumbers([3, 6, 7, 8, 9]);
