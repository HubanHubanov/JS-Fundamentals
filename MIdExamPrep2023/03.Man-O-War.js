function manOwar(arr) {
  let pirateShip = arr.shift().split(">").map(Number);
  let warShip = arr.shift().split(">").map(Number);
  let maxHealth = Number(arr.shift());
  let staleMate = true;

  let index = 0;
  let mainCommand = arr[index];

  while (mainCommand !== "Retire") {
    let [command, tokken1, tokken2, tokken3] = mainCommand.split(" ");

    if (command === "Fire") {
      let indexDamage = Number(tokken1);
      let damage = Number(tokken2);

      if (indexDamage >= 0 && indexDamage < warShip.length) {
        warShip[indexDamage] -= damage;
      }

      if (warShip[indexDamage] <= 0) {
        console.log("You won! The enemy ship has sunken.");
        staleMate = false;
        break;
      }
    } else if (command === "Defend") {
      let startIndex = Number(tokken1);
      let endIndex = Number(tokken2);
      let damageTaken = Number(tokken3);

      if (
        startIndex >= 0 &&
        startIndex < pirateShip.length &&
        endIndex >= 0 &&
        endIndex < pirateShip.length
      ) {
        for (let i = 0; i < pirateShip.length; i++) {
          if (i >= startIndex && i <= endIndex) {
            pirateShip[i] -= damageTaken;
            if (pirateShip[i] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              staleMate = false;
              break;
            }
          }
        }
      }
    } else if (command === "Repair") {
      let indexRepair = Number(tokken1);
      let health = Number(tokken2);

      if (indexRepair >= 0 && indexRepair < pirateShip.length) {
        pirateShip[indexRepair] += health;
        if (pirateShip[indexRepair] > maxHealth) {
          pirateShip[indexRepair] = maxHealth;
        }
      }
    } else if (command === "Status") {
      let count = 0;
      for (let el of pirateShip) {
        if (el < 0.2 * maxHealth) {
          count++;
        }
      }
      console.log(`${count} sections need repair.`);
    }

    index++;
    mainCommand = arr[index];
  }

  let pirateShipSum = 0;
  for (let section of pirateShip) {
    pirateShipSum += section;
  }

  let warShipSum = 0;
  for (let section of warShip) {
    warShipSum += section;
  }
  if (staleMate) {
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
  }
}

manOwar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
console.log("----------------");
manOwar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
