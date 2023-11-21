function schoolGrades(input) {
  let students = {};

  for (let line of input) {
    let tokens = line.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);

    if (!students.hasOwnProperty(name)) {
      students[name] = grades;
    } else {
      students[name] = students[name].concat(grades);
      //  students[name].push(...grades)
      //     students[name] = students[name]
    }
  }

  let entriesSorted = Object.entries(students).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [name, grades] of entriesSorted) {
    let sum = 0;
    let counter = 0;
    for (let grade of grades) {
      sum += grade;
      counter++;
    }
    let avg = sum / counter;
    console.log(`${name}: ${avg.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);

// console.log("--------------");
// schoolGrades(['Steven 3 5 6 4',
// 'George 4 6',
// 'Tammy 2 5 3',
// 'Steven 6 3'
// ])
