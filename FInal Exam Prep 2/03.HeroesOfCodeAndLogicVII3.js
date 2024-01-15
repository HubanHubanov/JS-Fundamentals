function heroesOfCodeAndLogic(input) {
  let heroesNumber = Number(input.shift());

  let index = 0;

  let heroes = [];

  while (index < heroesNumber) {
    let currHero = input.shift();

    let name = currHero.split(" ")[0];
    let HP = currHero.split(" ")[1];
    let MP = currHero.split(" ")[2];

    let hero = {
      name: name,
      HP: HP,
      MP: MP,
    };
    heroes.push(hero);

    index++;
  }

  let currLine = input.shift();

  while (currLine !== "End") {
    let tokens = currLine.split(" - ");

    let command = tokens.shift();

    let name = tokens[0];
    let found = heroes.find((el) => el.name === name);

    switch (command) {
      case "Heal":
        let heal = Number(tokens[1]);
        found.HP = Number(found.HP);

        if (found) {
          if (found.HP + heal > 100) {
            heal = 100 - Number(found.HP);
          }
          found.HP += heal;
        }

        console.log(`${name} healed for ${heal} HP!`);

        break;

      case "Recharge":
        let charge = Number(tokens[1]);
        found.MP = Number(found.MP);

        if (found) {
          if (found.MP + charge > 200) {
            charge = 200 - found.MP;
          }
        }
        found.MP += charge;
        console.log(`${name} recharged for ${charge} MP!`);

        break;

      case "TakeDamage":
        let damage = Number(tokens[1]);
        let attacker = tokens[2];

        if (found) {
          found.HP -= damage;
        }

        if (found.HP > 0) {
          console.log(
            `${name} was hit for ${damage} HP by ${attacker} and now has ${found.HP} HP left!`
          );
        } else {
          let index = heroes.indexOf(found);
          heroes.splice(index, 1);
          console.log(`${name} has been killed by ${attacker}!`);
        }

        break;

      case "CastSpell":
        let cast = Number(tokens[1]);
        let spell = tokens[2];

        if (found) {
          if (found.MP - cast >= 0) {
            found.MP -= cast;
            console.log(
              `${name} has successfully cast ${spell} and now has ${found.MP} MP!`
            );
          } else {
            console.log(`${name} does not have enough MP to cast ${spell}!`);
          }
        }

        break;
    }

    currLine = input.shift();
  }

  for (let el of heroes) {
    console.log(el.name);
    console.log(`  HP: ${el.HP}`);
    console.log(`  MP: ${el.MP}`);
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
