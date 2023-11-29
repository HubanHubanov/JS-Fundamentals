function needForSpeed(input) {
  let numCars = Number(input.shift());

  let carsObj = {};

  for (let i = 0; i < numCars; i++) {
    let currCar = input.shift();
    let [car, mileage, fuel] = currCar.split("|");

    let stats = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
    carsObj[car] = stats;
  }

  let currCommand = input.shift();

  while (currCommand !== "Stop") {
    let tokens = currCommand.split(" : ");
    let command = tokens.shift();
    let car = tokens.shift();

    switch (command) {
      case "Drive":
        let distance = Number(tokens[0]);
        let fuelNeeded = Number(tokens[1]);

        if (carsObj[car].fuel >= fuelNeeded) {
          carsObj[car].fuel -= fuelNeeded;
          carsObj[car].mileage += distance;
          console.log(
            `${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`
          );

          if (carsObj[car].mileage >= 100000) {
            delete carsObj[car];
            console.log(`Time to sell the ${car}!`);
          }
        } else {
          console.log("Not enough fuel to make that ride");
        }

        break;

      case "Refuel":
        let refuell = Number(tokens[0]);

        if (carsObj[car].fuel + refuell > 75) {
          refuell = 75 - carsObj[car].fuel;
        }

        carsObj[car].fuel += refuell;

        console.log(`${car} refueled with ${refuell} liters`);

        break;

      case "Revert":
        let reverted = Number(tokens[0]);

        if (carsObj[car].mileage - reverted < 10000) {
          carsObj[car].mileage = 10000;
        } else {
          carsObj[car].mileage -= reverted;
          console.log(`${car} mileage decreased by ${reverted} kilometers`);
        }

        break;
    }

    currCommand = input.shift();
  }

  for (let car in carsObj) {
    console.log(
      `${car} -> Mileage: ${carsObj[car].mileage} kms, Fuel in the tank: ${carsObj[car].fuel} lt.`
    );
  }
}


needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);

console.log("---------------");

needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
