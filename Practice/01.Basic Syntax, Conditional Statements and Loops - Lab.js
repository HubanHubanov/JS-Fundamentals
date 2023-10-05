function solve(input) {
  console.log(input * 2);
}

solve(2);

function solve(name, age, grade) {
  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

solve("John", 15, 5.54678);

function solve(grade) {
  if (grade >= 5.5) {
    console.log("Excellent");
  } else {
    console.log("Not excellent");
  }
}

solve(5.5);

function solve(country) {
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

solve("USA");

function solve(input) {

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

solve(13)

function solve(dayType, age) {
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

solve("Holiday", 110000);

function solve() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

solve();

function solve() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}
solve();

function solve(N) {
  while (N >= 1) {
    console.log(N);
    N--;
  }
}

solve(5);

function solve(m, n) {
  for (let i = m; i >= n; i--) {
    console.log(i);
  }
}

solve(6, 2);

function solve(n) {
  let sum = 0;

  for (let i = 1; i < n * 2; i += 2) {
    console.log(i);
    sum += i;
  }

  console.log(`Sum: ${sum}`);
}

solve(10);
