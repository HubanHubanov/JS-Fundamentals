function regex2() {
  let text = "Peter: 123 Mark: 456";

  let regex = /([A-Z][a-z]+): (\d+)/g;

  let matches = text.match(regex);

  console.log(matches);
  console.log(matches.length);
  console.log(matches[0]);
  console.log(matches[1]);

  let firstMatch = regex.exec(text);
  console.log(firstMatch);
  console.log(firstMatch[0]);
  console.log(firstMatch[1]);
  console.log(firstMatch[2]);

  let secondMatch = regex.exec(text);

  console.log(secondMatch);
}

regex2();
