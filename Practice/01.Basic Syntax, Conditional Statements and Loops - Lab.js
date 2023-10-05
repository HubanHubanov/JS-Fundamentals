function solve1(input) {
  console.log(input * 2);
}

solve1(2);

function solve2(name, age, grade) {
  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

solve2("John", 15, 5.54678);

function solve3(grade) {
  if (grade >= 5.5) {
    console.log("Excellent");
  } else {
    console.log("Not excellent");
  }
}

solve3(5.5);

function solve4(country) {
  if (country === "England" || country === "USA") {
    console.log("English");
  } else if (
    country === "Mexico" ||
    country === "Argentina" ||
    country === "Spain"
  ) {
    console.log("Spanish");
  } else {
    console.log("unknown");
  }
}

solve4("USA");

function solve5(input) {

    switch(input) {
        case 1 : console.log("January");; break;
        case 2 : console.log("February"); break;
        case 3 : console.log("March"); break;
        case 4 : console.log("April"); break;
        case 5 : console.log("May"); break;
        case 6 : console.log("June"); break;
        case 7 : console.log("July"); break;
        case 8 : console.log("August"); break;
        case 9 : console.log("September"); break;
        case 10 : console.log("October"); break;
        case 11 : console.log("November"); break;
        case 12 : console.log("December"); break;
        default: console.log("Error!");
    }
}

solve5(13)

function solve6(dayType, age) {
  let price = 0;

  switch (dayType) {
    case "Weekday":
      if (age >= 0 && age <= 18) {
        price = 12;
      } else if (age > 18 && age <= 64) {
        price = 18;
      } else if (age > 64 && age <= 122) {
        price = 12;
      }
      break;

    case "Weekend":
      if (age >= 0 && age <= 18) {
        price = 15;
      } else if (age > 18 && age <= 64) {
        price = 20;
      } else if (age > 64 && age <= 122) {
        price = 15;
      }
      break;

    case "Holiday":
      if (age >= 0 && age <= 18) {
        price = 5;
      } else if (age > 18 && age <= 64) {
        price = 12;
      } else if (age > 64 && age <= 122) {
        price = 10;
      }
      break;
  }

  if (age >= 0 && age <= 122) {
    console.log(`${price}$`);
  } else {
    console.log("Error!");
  }
}

solve6("Holiday", 110000);

function solve7() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

solve7();

function solve8() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}
solve8();

function solve9(N) {
  while (N >= 1) {
    console.log(N);
    N--;
  }
}

solve9(5);

function solve10(m, n) {
  for (let i = m; i >= n; i--) {
    console.log(i);
  }
}

solve10(6, 2);

function solve11(n) {
  let sum = 0;

  for (let i = 1; i < n * 2; i += 2) {
    console.log(i);
    sum += i;
  }

  console.log(`Sum: ${sum}`);
}

solve11(10);
