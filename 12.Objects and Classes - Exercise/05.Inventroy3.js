function inventroy(data) {
  let heroArr = [];

  for (let el of data) {
    let [name, level, items] = el.split(" / ");
    let hero = {
      name,
      level,
      items,
    };

    heroArr.push(hero);
  }

  let sortedArr = heroArr.sort((a, b) => a.level - b.level);

  for (let el of sortedArr) {
    console.log(`Hero: ${el.name}`);
    console.log(`level => ${el.level}`);
    console.log(`items => ${el.items}`);
  }
}

inventroy([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

// inventroy([
//   [
//     "Batman / 2 / Banana, Gun",
//     "Superman / 18 / Sword",
//     "Poppy / 28 / Sentinel, Antara",
//   ],
// ]);
