function destinationMapper(str) {
  let pattern = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g;

  let match = pattern.exec(str);

  let res = [];
  let points = 0;

  while (match) {
    let destination = match.groups.name;
    points += destination.length;

    res.push(destination);

    match = pattern.exec(str);
  }

  console.log(`Destinations: ${res.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}


destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

console.log("-------------------");

destinationMapper("ThisIs some InvalidInput");
