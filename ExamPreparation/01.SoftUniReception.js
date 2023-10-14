function softUniReception(data) {
  let firstEmployeeStudentsPerHour = Number(data[0]);
  let secondEmployeeStudentsPerHour = Number(data[1]);
  let thirdEmployeeStudentsPerHour = Number(data[2]);
  let allEmployeesStudentsPerHour =
    firstEmployeeStudentsPerHour +
    secondEmployeeStudentsPerHour +
    thirdEmployeeStudentsPerHour;

  let studentsCount = Number(data[3]);

  let hoursCount = 0;

  while (studentsCount > 0) {
    hoursCount++;
    if (hoursCount % 4 === 0) {
      studentsCount -= 0;
    } else {
      studentsCount -= allEmployeesStudentsPerHour;
    }
  }

  console.log(`Time needed: ${hoursCount}h. `);
}

softUniReception(["5", "6", "4", "20"]);

softUniReception(["1", "2", "3", "45"]);

softUniReception(["3", "2", "5", "40"]);
