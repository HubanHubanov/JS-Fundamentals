function inventory(input) {
  let arr = [];

  let obj = {};

  input.forEach((line) => {
    let [hero, level, items] = line.split(" / ");

    obj = {
      hero: hero,
      level: level,
      items: items,
    };

    arr.push(obj);
  });

  arr.sort((a, b) => a.level - b.level);

  for (let obj of arr) {
    console.log(`Hero: ${obj.hero}`);
    console.log(`level => ${obj.level}`);
    console.log(`items => ${obj.items}`);
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
