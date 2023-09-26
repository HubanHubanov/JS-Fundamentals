function meetings(data) {
  let resObj = {};

  data.forEach((line) => {
    let [day, name] = line.split(" ");

    if (!resObj.hasOwnProperty(day)) {
      console.log(`Scheduled for ${day}`);
      resObj[day] = name;
    } else {
      console.log(`Conflict on ${day}!`);
    }
  });

  for (let [key, value] of Object.entries(resObj)) {
    console.log(`${key} -> ${value}`);
  }
}

meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
