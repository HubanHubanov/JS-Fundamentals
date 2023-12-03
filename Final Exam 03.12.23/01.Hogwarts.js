function hogwarts(input) {
  let spell = input.shift();

  let index = 0;
  let lineOfInput = input[index];

  while (lineOfInput !== "Abracadabra") {
    let tokens = lineOfInput.split(" ");
    let command = tokens.shift();

    if (command === "Illusion") {
      let index = Number(tokens[0]);
      let letter = tokens[1];
      if (index >= 0 && index < spell.length) {
        let firsPart = spell.substring(0, index);
        let secondPart = spell.substring(index + 1);
        spell = firsPart + letter + secondPart;
        console.log("Done!");
      } else {
        console.log("The spell was too weak.");
      }
    } else if (command === "Abjuration") {
      let res = "";
      for (let ch of spell) {
        res += ch.toUpperCase();
      }
      spell = res;
      console.log(spell);
    } else if (command == "Necromancy") {
      let res = "";
      for (let ch of spell) {
        res += ch.toLowerCase();
      }
      spell = res;
      console.log(spell);
    } else if (command === "Divination") {
      let firstSubstr = tokens[0];
      let secondSubstr = tokens[1];

      if (!spell.includes(firstSubstr)) {
        continue;
      }

      while (spell.includes(firstSubstr)) {
        spell = spell.replace(firstSubstr, secondSubstr);
      }
      console.log(spell);
    } else if (command === "Alteration") {
      let substrToRemove = tokens[0];

      if (!spell.includes(substrToRemove)) {
        continue;
      }
      spell = spell.replace(substrToRemove, "");
      console.log(spell);
    } else {
      console.log("The spell did not work!");
    }

    index++;
    lineOfInput = input[index];
  }
}

hogwarts([
  "A7ci0",

  "Illusion 1 c",

  "Illusion 4 o",

  "Abjuration",

  "Abracadabra",
]);
console.log("--------------------");
hogwarts([
  "TR1GG3R",

  "Necromancy",

  "Illusion 8 m",

  "Illusion 9 n",

  "Abracadabra",
]);
console.log("--------------------");
hogwarts([
  "SwordMaster",

  "Target Target Target",

  "Abjuration",

  "Necromancy",

  "Alteration master",

  "Abracadabra",
]);
