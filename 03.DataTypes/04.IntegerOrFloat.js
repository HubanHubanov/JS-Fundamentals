function integerOrFloat(a, b, c) {
  let sum = a + b + c;
  let type = "";

  if (sum % 1 === 0) {
    type = "Integer";
  } else {
    type = "Float";
  }

  console.log(`${sum} - ${type}`);
}

integerOrFloat(9, 100, 1.1);

console.log("----------------------");

integerOrFloat(100, 200, 303);
