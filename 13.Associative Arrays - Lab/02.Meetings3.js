function meetings(input) {
  let appointments = {};

  for (let el of input) {
    let [day, name] = el.split(" ");

    if (!appointments.hasOwnProperty(day)) {
      appointments[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  for (let el in appointments) {
    console.log(el, "->", appointments[el]);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
console.log("-------------");
meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
