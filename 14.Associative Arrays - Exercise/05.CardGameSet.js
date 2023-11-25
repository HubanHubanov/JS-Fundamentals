function cardGame(input) {
    let obj = {};
  
    for (let line of input) {
      let set = new Set();
      let [name, cards] = line.split(": ");
  
      if (obj.hasOwnProperty(name)) {
        for (let element of cards.split(", ")) {
          obj[name].add(element);
        }
      } else {
        for (let el of cards.split(", ")) {
          set.add(el);
        }
  
        obj[name] = set;
      }
    }
  
    let entries = Object.entries(obj);
  
    for (let [name, cards] of entries) {
      let sum = 0;
      for (let card of cards) {
        let tokens = card.split("");
        let power = tokens.pop();
        let type = tokens.join("");
        sum += cardsValue(type, power);
      }
      console.log(`${name}: ${sum}`);
    }
    function cardsValue(a, b) {
      switch (b) {
        case "S":
          b = 4;
          break;
        case "H":
          b = 3;
          break;
        case "D":
          b = 2;
          break;
        case "C":
          b = 1;
          break;
      }
  
      switch (a) {
        case "2":
          a = 2;
          break;
        case "3":
          a = 3;
          break;
        case "4":
          a = 4;
          break;
        case "5":
          a = 5;
          break;
        case "6":
          a = 6;
          break;
        case "7":
          a = 7;
          break;
        case "8":
          a = 8;
          break;
        case "9":
          a = 9;
          break;
        case "10":
          a = 10;
          break;
        case "J":
          a = 11;
          break;
        case "Q":
          a = 12;
          break;
        case "K":
          a = 13;
          break;
        case "A":
          a = 14;
          break;
      }
      return a * b;
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
  console.log("-------------------------------");
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
  