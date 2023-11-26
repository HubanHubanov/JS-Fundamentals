function heroesOfCodeAndLogic(input) {
  let numHeroes = input.shift();

  let heroesArr = [];

  for (let i = 0; i < numHeroes; i++) {
    let currHero = input.shift();
    let [name, HP, MP] = currHero.split(" ");
    HP = Number(HP);
    MP = Number(MP);

    let heroObj = {
      name,
      HP: HP,
      MP: MP,
    };
    heroesArr.push(heroObj);
  }

  let command = input.shift();

  while (command !== "End") {
    let tokens = command.split(" - ");
    let action = tokens.shift();
    let name = tokens.shift();
    let found;

    if (action === "Heal") {
      let healAmount = Number(tokens[0]);

      found = heroesArr.find((x) => x.name === name);
      found.HP += healAmount;

      let healed = healAmount;

      if (found.HP > 100) {
        healed = healAmount - (found.HP - 100);

        found.HP = 100;
      }
      console.log(`${found.name} healed for ${healed} HP!`);
    } else if (action === "Recharge") {
      let rechargeAmount = Number(tokens[0]);

      found = heroesArr.find((x) => x.name === name);

      found.MP += rechargeAmount;
      let recharged = rechargeAmount;

      if (found.MP > 200) {
        recharged = rechargeAmount - (found.MP - 200);

        found.MP = 200;
      }
      console.log(`${found.name} recharged for ${recharged} MP!`);
    } else if (action === "TakeDamage") {
      let damage = Number(tokens[0]);
      let attacker = tokens[1];

      found = heroesArr.find((x) => x.name === name);

      found.HP -= damage;

      if (found.HP > 0) {
        console.log(
          `${found.name} was hit for ${damage} HP by ${attacker} and now has ${found.HP} HP left!`
        );
      } else {
        console.log(`${found.name} has been killed by ${attacker}!`);
        heroesArr = heroesArr.filter((h) => h !== found);
      }
    } else if (action === "CastSpell") {
      let mpNeeded = Number(tokens[0]);
      let spell = tokens[1];

      found = heroesArr.find((x) => x.name === name);

      if (found.MP < mpNeeded) {
        console.log(`${found.name} does not have enough MP to cast ${spell}!`);
      } else {
        found.MP -= mpNeeded;
        console.log(
          `${found.name} has successfully cast ${spell} and now has ${found.MP} MP!`
        );
      }
    }

    command = input.shift();
  }

  for (let hero of heroesArr) {
    console.log(hero.name);
    console.log(`  HP: ${hero.HP}`);
    console.log(`  MP: ${hero.MP}`);
  }
}

// heroesOfCodeAndLogic([
//   "2",
//   "Solmyr 85 120",
//   "Kyrre 99 50",
//   "Heal - Solmyr - 10",
//   "Recharge - Solmyr - 50",
//   "TakeDamage - Kyrre - 66 - Orc",
//   "CastSpell - Kyrre - 15 - ViewEarth",
//   "End",
// ]);

heroesOfCodeAndLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
