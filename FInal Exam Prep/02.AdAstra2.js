function adAstra(str) {
    let pattern =
      /([#|])(?<name>[A-Za-z\s]+)\1(?<exp>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<cal>[0-9]+)\1/g;
  
    let match = pattern.exec(str);
  
    let totalCal = 0;
    let print = "";
    while (match) {
      totalCal += Number(match.groups.cal);
      print +=
        `Item: ${match.groups.name}, Best before: ${match.groups.exp}, Nutrition: ${match.groups.cal}` +
        "\n";
      match = pattern.exec(str);
    }
  
    let daysToLast = Math.floor(totalCal / 2000);
  
    console.log(`You have food to last you for: ${daysToLast} days!`);
    console.log(print);
  }
  
  
  adAstra([
    "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500|| Not right|6.8.20|5|",
  ]);
  
  