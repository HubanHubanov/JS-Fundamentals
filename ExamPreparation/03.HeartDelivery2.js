function heartDelivery(data) {
  let arr = data.shift().split("@").map(Number);
  let index = 0;
  let currLine = data[index];
  let currPosition = 0;
  let totalHouses = arr.length;
  let valentineHouses = 0;

  while (currLine !== "Love!") {
    let [jump, length] = currLine.split(" ");

    currPosition += Number(length);

    if (currPosition > arr.length - 1) {
      currPosition = 0;
    }

    arr[currPosition] -= 2;

    if (arr[currPosition] === 0) {
      console.log(`Place ${currPosition} has Valentine's day.`);
      valentineHouses++;
    } else if (arr[currPosition] < 0) {
      console.log(`Place ${currPosition} already had Valentine's day.`);
    }

    index++;
    currLine = data[index];
  }
  console.log(`Cupid's last position was ${currPosition}.`);
  if (valentineHouses === totalHouses) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${totalHouses - valentineHouses} places.`);
  }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
console.log("-------------------------------");
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
console.log("-------------------------------");
heartDelivery([
  "4@2@4@2",
  "Jump 1",
  "Jump 2",
  "Jump 1",
  "Jump 2",
  "Jump 2",
  "Jump 2",
  "Love!",
]);
