function cardGame(data) {
  let result = new Map();

  let cardPowerEnum = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let cardTypeEnum = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  for (let line of data) {
    let [name, cards] = line.split(": ");

    if (!result.has(name)) {
      result.set(name, new Set());
    }

    let cardsArray = cards.split(", ");

    for (let card of cardsArray) {
      result.get(name).add(card);
    }
  }

  for (let [name, cards] of Array.from(result)) {
    let sum = 0;

    for (let el of cards) {
      let cardsTransformed = el.split("");
      let powerAsString = cardsTransformed
        .slice(0, cardsTransformed.length - 1)
        .join("");
      let cardAsString = cardsTransformed
        .splice(cardsTransformed.length - 1, 1)
        .join("");

      let power = cardPowerEnum[powerAsString];
      let type = cardTypeEnum[cardAsString];

      sum += power * type;
    }
    console.log(`${name}: ${sum}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

console.log("-----------------");

cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
