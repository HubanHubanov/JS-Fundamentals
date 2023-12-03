function easterEggs(input) {
  let str = input[0];

  let pattern =
    /[@#]+(?<color>[a-z]{3,})[@#]+[^A=Za-z0-9]*\/+(?<amount>[0-9]+)\/+/g;

  let match = pattern.exec(str);

  while (match) {
    let color = match.groups.color;
    let amount = match.groups.amount;
    console.log(`You found ${amount} ${color} eggs!`);

    match = pattern.exec(str);
  }
}


easterEggs([
  "@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/",
]);
console.log("---------------------");
easterEggs(["#@##@red@#/8/@rEd@/2/#@purple@////10/"]);
