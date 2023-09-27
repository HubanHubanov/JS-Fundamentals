function schoolGrades(data) {
  let obj = {};

  data.forEach((el) => {
    let tokens = el.split(" ");
    let name = tokens.shift();
    let grades = tokens;

    if (!obj.hasOwnProperty(name)) {
      obj[name] = tokens;
    } else {
      let value = obj[name];
      value.push(...tokens);

      obj[name] = value;
    }
  });

  let sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));

  for (let key of sortedKeys) {
    let sumOfGrades = 0;
    let numOfGrades = 0;
    for (el of obj[key]) {
      sumOfGrades += Number(el);
      numOfGrades++;
    }
    let averageGrade = (sumOfGrades / numOfGrades).toFixed(2);
    console.log(`${key}: ${averageGrade}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
console.log("---------------");
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
