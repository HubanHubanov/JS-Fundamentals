function dungeonestDark(arr) {
  let health = 100;
  let coins = 0;
  let roomsCount = 0;

  let notSurvived = false;

  let arrAsString = arr.join();
  let newArr = arrAsString.split("|");

  for (let el of newArr) {
    roomsCount++;
    let [variable, number] = el.split(" ");
    if (variable === "potion") {
      health += Number(number);

      if (health > 100) {
        number = number - (health - 100);
        health = 100;
      }
      console.log(`You healed for ${number} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (variable === "chest") {
      coins += Number(number);
      console.log(`You found ${number} coins.`);
    } else {
      health -= Number(number);
      if (health > 0) {
        console.log(`You slayed ${variable}.`);
      } else {
        console.log(`You died! Killed by ${variable}.`);
        console.log(`Best room: ${roomsCount}`);
        notSurvived = true;
        break;
      }
    }
  }

  if (!notSurvived) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
