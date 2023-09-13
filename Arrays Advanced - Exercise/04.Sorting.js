function sorting(arr) {

  let resArr = [];

  let arrLength = arr.length;

  let iteration = 0;

  for (i = 0; i < arrLength; i++) {
    iteration++;

    if (iteration % 2 !== 0) {
      arr.sort((a, b) => b - a);
      resArr.push(arr[0]);
      arr.shift();
      
    } else {
      arr.sort((a, b) => a - b);
      resArr.push(arr[0]);
      arr.shift();
    }
  }

  console.log(resArr.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
