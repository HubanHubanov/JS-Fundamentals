// function solve(base, power) {
//   let res = 1;
//   for (let i = 1; i <= power; i++) {
//     res = multiply(res, base);
//   }

//   function multiply(a, b) {
//     return a * b;
//   }

//   console.log(res);
// }
// solve(3, 4);

function test(base, power) {
  let res = 1;
  for (let i = 0; i < power; i++) {

    res*=base
  }

  console.log(res);
}

test(3, 4);
