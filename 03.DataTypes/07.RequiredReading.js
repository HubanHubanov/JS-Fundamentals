function requiredReading(pages, pagesPerHour, days) {
  let hoursToReaTheBook = pages / pagesPerHour;
  let hoursPerDay = hoursToReaTheBook / days;

  console.log(hoursPerDay);
}

requiredReading(212, 20, 2);
