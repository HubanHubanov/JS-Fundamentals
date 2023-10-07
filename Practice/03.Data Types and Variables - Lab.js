// function solve1(input) {
//  if(typeof(input) === "string" || typeof(input) === "number") {
//         console.log(typeof(input));
//         console.log(input);
//     } else {
//         console.log(typeof(input));
//         console.log("Parameter is not suitable for printing");
//     }
// }
// solve1('Hello, JavaScript!')

// function solve2(name, surname, delimiter) {
//   console.log(`${name}${delimiter}${surname}`);
// }
// solve2("John", "Smith", "->");

// function solve3(firstWord, ch, secondWord) {
//   let newWord = firstWord.replace("_", ch);
//   if (newWord === secondWord) {
//     console.log("Matched");
//   } else {
//     console.log("Not Matched");
//   }
// }
// solve3("Str_ng", "I", "Strong");

// function solve4(firstNum, secondNum, thirdNum) {
//   let sum = firstNum + secondNum + thirdNum;

//   let result = sum % 1 === 0 ? "Integer" : "Float";
//   console.log(`${sum} - ${result}`);
// }
// solve4(9, 100, 1.1);
// solve4(100, 200, 303);

// function solve5(num) {
//   let numToString = num.toString();

//   let sum = 0;

//   for (let ch of numToString) {
//     sum += Number(ch);
//   }

//   let sumToString = sum.toString();

//   let res = sumToString.includes(9) ? "True" : "False";

//   console.log(`${num} Amazing? ${res}`);
// }
// solve5(1233);

// function solve6(bandName, albumName, songName) {
//   let duration = (albumName.length * bandName.length * songName.length) / 2;
//   let rotaions = duration / 2.5;

//   console.log(`The plate was rotated ${Math.ceil(rotaions)} times.`);
// }

// solve6("Black Sabbath", "Paranoid", "War Pigs");

// function solve7(bookPages, pagerPerHour, daysToRead) {
//   let pagesToReadForOneDay = bookPages / daysToRead;
//   let hoursToReadForOneDay = pagesToReadForOneDay / pagerPerHour;

//   console.log(hoursToReadForOneDay);
// }

// solve7(212, 20, 2);

// function solve8(num) {
//   let numYears = num * 100;
//   let numDays = Math.trunc(numYears * 365.2422);
//   let numHours = numDays * 24;
//   let numMins = numHours * 60;

//   console.log(
//     `${num} centuries = ${numYears} years = ${numDays} days = ${numHours} hours = ${numMins} minutes`
//   );
// }

// solve8(1);

// function solve9(n) {
//   for (let i = 1; i <= n; i++) {
//     let numToString = i.toString();
//     let sum = 0;
//     for (let j = 0; j < numToString.length; j++) {
//       sum += Number(numToString[j]);
//     }
//     if (sum === 5 || sum === 7 || sum === 11) {
//       console.log(`${i} -> True`);
//     } else {
//       console.log(`${i} -> False`);
//     }
//   }
// }

// solve9(15);


// function solve10(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let k = 0; k < n; k++) {
//         let x = String.fromCharCode(97 + i);
//         let y = String.fromCharCode(97 + j);
//         let z = String.fromCharCode(97 + k);

//         console.log(`${x}${y}${z}`);
//       }
//     }
//   }
// }
// solve10(3);
