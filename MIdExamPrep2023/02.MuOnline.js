function muOnline(str) {
  let health = 100;
  let coins = 0;
  let roomsCount = 0;

  let arr = str.split("|");

  for (el of arr) {
    let [command, power] = el.split(" ");
    power = Number(power);
    roomsCount++;

    if (command === "potion") {
      if (power + health > 100) {
        power = power - (power + health - 100);
      }

      health += power;

      console.log(`You healed for ${power} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      coins += power;
      console.log(`You found ${power} bitcoins.`);
    } else {
      health -= power;

      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        break;
      }
    }
  }

  if (health > 0) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);
  } else {
    console.log(`Best room: ${roomsCount}`);
  }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log("--------------");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
