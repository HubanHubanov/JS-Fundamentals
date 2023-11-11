function pascalCaseSplitter(str) {
  let res = [];

  let word = str[0];
  for (let i = 1; i < str.length; i++) {
    ch = str[i];
    if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
      res.push(word);
      word = "";
    }
    word += ch;
    if (i === str.length - 1) {
      res.push(word);
    }
  }
  console.log(res.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");

pascalCaseSplitter("HoldTheDoor");

pascalCaseSplitter("ThisIsSoAnnoyingToDo");
