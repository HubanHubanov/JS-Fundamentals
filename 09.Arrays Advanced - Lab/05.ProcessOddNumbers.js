function processOddNumbers(arr) {

  let arrOdd = arr.filter((x, i) => i % 2 !== 0);
  // let arrOdd = arr.filter(function(a,i) {
  //     return i %2 !== 0
  // })

  let arrOddDouble = arrOdd.map((x) => x * 2);

  let arrOddDoubleReverse = arrOddDouble.reverse();

  console.log(arrOddDoubleReverse.join(" "));

}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
