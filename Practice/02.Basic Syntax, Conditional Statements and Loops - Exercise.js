function solve1(age) {
  if (age >= 0 && age <= 2) {
    console.log("baby");
  } else if (age >= 3 && age <= 13) {
    console.log("child");
  } else if (age >= 14 && age <= 19) {
    console.log("teenager");
  } else if (age >= 20 && age <= 65) {
    console.log("adult");
  } else if (age >= 66) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
}
solve1(20);

function solve2(num, precision) {
  if (precision > 15) {
    precision = 15;
  }

  let res = num.toFixed(precision);

  console.log(parseFloat(res));
}
solve2(3.1415926535897932384626433832795, 2);
solve2(10.5, 3);

function solve3(num) {
  let arr = [2, 3, 6, 7, 10];
  arr.reverse();

  let isNotDivisible = false;

  for (let i = 0; i < arr.length; i++) {
    if (num % arr[i] === 0) {
      console.log(`The number is divisible by ${arr[i]}`);
      isNotDivisible = true;
      break;
    }
  }
  if (!isNotDivisible) {
    console.log("Not divisible");
  }
}
solve3(1643);

function solve4(num, type, day) {
  let price = 0;

  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          price = 8.45;
          break;

        case "Saturday":
          price = 9.8;
          break;

        case "Sunday":
          price = 10.46;
          break;
      }

      break;

    case "Business":
      switch (day) {
        case "Friday":
          price = 10.9;
          break;

        case "Saturday":
          price = 15.6;
          break;

        case "Sunday":
          price = 16;
          break;
      }

      break;

    case "Regular":
      switch (day) {
        case "Friday":
          price = 15;
          break;

        case "Saturday":
          price = 20;
          break;

        case "Sunday":
          price = 22.5;
          break;
      }

      break;
  }

  let totalPrice = num * price;

  if (num >= 30 && type === "Students") {
    totalPrice *= 0.85;
  }

  if (type === "Business" && num >= 100) {
    totalPrice -= 10 * price;
  }

  if (type === "Regular" && num >= 10 && num <= 20) {
    totalPrice *= 0.95;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve4(30, "Students", "Sunday");

function solve5(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

solve5(1984);

function solve6(firsNum, lastNum) {
  let sum = 0;
  let buff = "";

  for (let i = firsNum; i <= lastNum; i++) {
    buff += i + " ";
    sum += i;
  }
  console.log(buff);
  console.log(`Sum: ${sum}`);
}

solve6(5, 10);

function solve7(n) {
  for (let row = 1; row <= n; row++) {
    let col = row;
    let res = "";
    for (i = 1; i <= col; i++) {
      res += col + " ";
    }

    console.log(res);
  }
}

solve7(5);

function solve8(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

solve8(5);
