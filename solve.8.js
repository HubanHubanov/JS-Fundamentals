function solve(data) {
  let arr = [];

  data.forEach((line) => {
    let [name, level, items] = line.split(" / ");
    let obj = {
      name,
      level,
      items,
    };
    arr.push(obj);
  });

  let sorted = arr.sort((a, b) => a.level - b.level);

  for (let el of sorted) {
    console.log(`Hero: ${el.name}`);
    console.log(`level => ${el.level}`);
    console.log(`items => ${el.items}`);
  }
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
