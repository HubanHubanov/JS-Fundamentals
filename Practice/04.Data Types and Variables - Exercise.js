// function solve1(num) {
//   let numAsString = num.toString();
//   sum = 0;
//   for (let i = 0; i < numAsString.length; i++) {
//     sum += Number(numAsString[i]);
//   }
//   console.log(sum);
// }

// solve1(245678);

// function solve2(x, y, z) {
//   let res = `${x}${y}${z}`;

//   console.log(res);
// }
// solve2("a", "b", "c");

// function solve3(town, population, area) {
//   console.log(
//     `Town ${town} has population of ${population} and area ${area} square km.`
//   );
// }
// solve3("Sofia", 1286383, 492);

// function solve4(meters) {
//   let kilometers = meters / 1000;

//   console.log(kilometers.toFixed(2));
// }
// solve4(1852);

// function solve5(pounds) {
//   console.log((pounds * 1.31).toFixed(3));
// }
// solve5(80);

// function solve6(a, b, c) {
//   let res = `${c} ${b} ${a}`;

//   console.log(res);
// }
// solve6("A", "B", "C");

// function solve7(ch) {
//   let chCode = ch.charCodeAt();

//   if (chCode >= 97 && chCode <= 122) {
//     console.log("lower-case");
//   } else if (chCode >= 65 && chCode <= 90) {
//     console.log("upper-case");
//   }
// }
// solve7("L");

// function solve8(number, operator, anotherNumber) {
//   let result = 0;

//   if (operator === "+") {
//     result = number + anotherNumber;
//   } else if (operator === "-") {
//     result = number - anotherNumber;
//   } else if (operator === "/") {
//     result = number / anotherNumber;
//   } else if (operator === "*") {
//     result = number * anotherNumber;
//   }
//   console.log(result.toFixed(2));
// }
// solve8(5, "+", 10);
