function cardGame(input) {
    let obj = {};
  
    for (let line of input) {
      let [name, cards] = line.split(": ");
      
      if (!obj.hasOwnProperty(name)) {
        obj[name] = cards
      } else {
        obj[name] += ", " + cards;
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
  
          switch (power) {
          case "J": power = 11; break;
          case "Q": power = 12; break;
          case "K": power = 13; break;
          case "A": power = 14; break;
          dafault: break;
       }
  
        switch (card) {
          case "S": card = 4; break;
          case "H": card = 3; break;
          case "D": card = 2; break;
          case "C": card = 1; break;
          defalt: break;
  
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
  