function daysOfWeek(num) {
  let isMatch = false;

  let arr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  for (let i = 0; i < arr.length; i++) {
    if (i + 1 === num) {
      console.log(arr[i]);
      isMatch = true;
    }
  }

  if (!isMatch) {
    console.log("Invalid day!");
  }
}
daysOfWeek(7);
