function adAstra(str) {
  let pattern =
    /([#|])(?<name>[A-Za-z\s]+)\1(?<exp>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<cal>[0-9]+)\1/g;

  let match = pattern.exec(str);

  let totalCal = 0;
  while (match) {
    totalCal += Number(match.groups.cal);
    match = pattern.exec(str);
  }

  let daysToLast = Math.floor(totalCal / 2000);

  match = pattern.exec(str);

  console.log(`You have food to last you for: ${daysToLast} days!`);
  while (match) {
    console.log(
      `Item: ${match.groups.name}, Best before: ${match.groups.exp}, Nutrition: ${match.groups.cal}`
    );
    match = pattern.exec(str);
  }
}

adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
console.log("-----------------------------------");
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500|| Not right|6.8.20|5|",
]);
console.log("-----------------------------------");

adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
