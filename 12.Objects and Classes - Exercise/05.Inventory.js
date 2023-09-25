function inventory(input) {
  let arr = [];

  let obj = {};

  input.forEach((line) => {
    let [hero, level, items] = line.split(" / ");

    obj = {
      Hero: hero,
      level: level,
      items: items,
    };

    arr.push(obj);
  });

  arr.sort((a, b) => a.level - b.level);

  for (let obj of arr) {
    for (let key in obj) {
      if (key === "Hero") {
        console.log(`${key}: ${obj[key]}`);
      } else {
        console.log(`${key} => ${obj[key]}`);
      }
    }
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
