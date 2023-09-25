function multiply(a, b) {
  let result = a * b;
  return result;
}
console.log(multiply(5, 6));

let multiply1 = function (a, b) {
  return a * b;
};
console.log(multiply1(2, 3));

let multiplyArrow = (x, y) => x * y;

console.log(multiplyArrow(3, 4));

console.log("------------------------");

function printName(name, surname) {
  let fullName = name + " " + surname;
  return fullName;
}

console.log(printName("Huban", "Hubanov"));

let printName1 = function (name, surname) {
  let fullName = `${name} ${surname}`;
  return fullName;
};
console.log(printName1("Huban", "Hubanov"));

let printNameArrow = (name, surname) => name + " " + surname;
console.log(printNameArrow("Huban", "Hubanov"));

function devide(x, y) {
  return x / y;
}
console.log(devide(6, 2));

let devideTwoNumbers = function (x, y) {
  return x / y;
};

console.log(devideTwoNumbers(9, 2));

let devideResult = (x, y) => x / y;
console.log(devideResult(100, 4));
