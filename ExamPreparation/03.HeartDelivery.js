function heartDelivery(data) {
  let houses = data.shift().split("@");
  houses = houses.map((x) => Number(x));

  let index = 0;
  let command = data[index];

  let indexToReduce = 0;
  let successCount = 0;
  let hasValentine = false;

  while (command !== "Love!") {
    let [jump, length] = command.split(" ");

    indexToReduce += Number(length);

    for (let i = 0; i < houses.length; i++) {
      if (indexToReduce >= houses.length) {
        indexToReduce = 0;
        if(indexToReduce === i) {
        houses[indexToReduce] -= 2;
        }
        
      } else if (i === indexToReduce) {
        houses[indexToReduce] -= 2;
        i = indexToReduce;
      }

      if (houses[indexToReduce] <= 0) {
        successCount++;
        if(hasValentine) {
            console.log(`Place ${indexToReduce} already had Valentine's day.`);
        } else {
 console.log(`Place ${indexToReduce} has Valentine's day.`);
        hasValentine = true
        }

       
        
      }
    }


    index++;
    command = data[index];
  }

  let failedCount = houses.length - successCount;
  console.log(`Cupid's last position was ${indexToReduce}.`);
  console.log(`Cupid has failed ${failedCount} places.`);
}
// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);

heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);

// heartDelivery((["4@2@4@2",
// "Jump 1",
// "Jump 2",
// "Jump 1",
// "Jump 2",
// "Jump 2",
// "Jump 2",
// "Love!"])
// )
