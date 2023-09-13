function solve(num) {

  let res = [] 
  
  while (num.length > 1) {
    for (let i = 0; i < num.length - 1; i ++) {
    // // let sum = 0;
    // //       sum += num[i] + num[i+1];
    //       res.push(sum)
      res[i] = num[i] + num[i+1]  
      // console.log(res[i]);
           console.log(i);
        }
     num = res;
     res = []

  
   
      }
// console.log(num.toString());
}

 

solve([2,10,3] )