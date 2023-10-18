function sorting(arr) {
    let res = [];
    arr.sort((a, b) => b - a);
    let arrLength = arr.length;
  
    for (let i = 0; i < arrLength; i++) {
      if (i % 2 === 0) {
        res.push(arr.shift());
      } else {
        res.push(arr.pop());
      }
    }
  
    console.log(res.join(" "));
  }
  sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
  
  sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
  