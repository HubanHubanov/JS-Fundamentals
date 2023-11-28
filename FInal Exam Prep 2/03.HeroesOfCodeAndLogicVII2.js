function heroesOfCodeAndLogic(input) {
  let numHeroes = Number(input.shift());

  let heroes = {};

  for (let i = 0; i < numHeroes; i++) {
    let currLine = input[i];
    let [name, HP, MP] = currLine.split(" ");

    heroes[name] = {
      HP: Number(HP),
      MP: Number(MP),
    };
  }

  for (let i = numHeroes; i < input.length; i++) {
    let currInput = input[i];

    if (currInput === "End") {
      break;
    }

    let tokens = currInput.split(" - ");
    let command = tokens.shift();
    let name = tokens.shift();

    switch (command) {
      case "Heal":
        let healing = Number(tokens[0]);

        if (heroes[name].HP + healing > 100) {
          healing = 100 - heroes[name].HP;
        }

        heroes[name].HP += healing;
        console.log(`${name} healed for ${healing} HP!`);

        break;
      case "Recharge":
        let reacherging = Number(tokens[0]);

        if (heroes[name].MP + reacherging > 200) {
          reacherging = 200 - heroes[name].MP;
        }
        heroes[name].MP += reacherging;
        console.log(`${name} recharged for ${reacherging} MP!`);

        break;
      case "TakeDamage":
        let damage = Number(tokens[0]);
        let attacker = tokens[1];

        heroes[name].HP -= damage;

        if (heroes[name].HP > 0) {
          console.log(
            `${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].HP} HP left!`
          );
        } else {
          console.log(`${name} has been killed by ${attacker}!`);
          delete heroes[name];
        }
        break;
      case "CastSpell":
        let mpNeeded = Number(tokens[0]);
        let spell = tokens[1];
        if (mpNeeded <= heroes[name].MP) {
          heroes[name].MP -= mpNeeded;
          console.log(
            `${name} has successfully cast ${spell} and now has ${heroes[name].MP} MP!`
          );
        } else {
            console.log(`${name} does not have enough MP to cast ${spell}!`);
        }
        break;
    }
  }

  let entries = Object.entries(heroes);

  for (let [name, values] of entries) {
    console.log(name);
    console.log(`  HP: ${values.HP}`);
    console.log(`  MP: ${values.MP}`);
  }
}

heroesOfCodeAndLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);

//   heroesOfCodeAndLogic([
//     "4",
//     "Adela 90 150",
//     "SirMullich 70 40",
//     "Ivor 1 111",
//     "Tyris 94 61",
//     "Heal - SirMullich - 50",
//     "Recharge - Adela - 100",
//     "CastSpell - Tyris - 1000 - Fireball",
//     "TakeDamage - Tyris - 99 - Fireball",
//     "TakeDamage - Ivor - 3 - Mosquito",
//     "End",
//   ]);
