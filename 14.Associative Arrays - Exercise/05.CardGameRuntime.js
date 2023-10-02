function cardGame(input) {
  let obj = {};

  for (let line of input) {
    let lineSplit = line.split(": ");
    let name = lineSplit.shift();

    if (!obj.hasOwnProperty(name)) {
      obj[name] = lineSplit;
    } else {
      obj[name] += ", " + lineSplit;
    }
  }

  let entries = Object.entries(obj);

  for (let [name, value] of entries) {
    let cardSequence = value.split(", ");

    let arr = [];
    for (let el of cardSequence) {
      if (!arr.includes(el)) {
        arr.push(el);
      }
    }
    let sum = 0;
    for (let el of arr) {
      let [power, card] = el.split("");

      if (el.length === 3) {
        power = 10;
        card = el.split("")[2];
      }

      if (power === "J") {
        power = 11;
      } else if (power === "Q") {
        power = 12;
      } else if (power === "K") {
        power = 13;
      } else if (power === "A") {
        power = 14;
      }

      if (card === "S") {
        card = 4;
      } else if (card === "H") {
        card = 3;
      } else if (card === "D") {
        card = 2;
      } else if (card === "C") {
        card = 1;
      }

      sum += power * card;
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
