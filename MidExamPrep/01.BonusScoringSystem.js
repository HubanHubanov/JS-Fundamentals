function bonusScoringSystem(arr) {
  arr = arr.map(Number);
  let studentsNum = arr.shift();
  let lecturesNum = arr.shift();
  let bonusNum = arr.shift();

  let maxBonus = 0;
  let maxAttendances = 0;

  for (let i = 0; i < studentsNum; i++) {
    let attendances = arr[i];
  
    let totalBonus = (attendances / lecturesNum) * (5 + bonusNum);

    if (totalBonus > maxBonus) {
      maxBonus = totalBonus;
      maxAttendances = attendances;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttendances} lectures.`);
}

bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);

// bonusScoringSystem([
//   "10",
//   "30",
//   "14",
//   "8",
//   "23",
//   "27",
//   "28",
//   "15",
//   "17",
//   "25",
//   "26",
//   "5",
//   "18",
// ]);
