function meetings(data) {
  let obj = {};

  for (let line of data) {
    let [day, name] = line.split(" ");

    if (!obj.hasOwnProperty(day)) {
      obj[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }

  for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
// console.log("-----------");
// meetings(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']
// )
