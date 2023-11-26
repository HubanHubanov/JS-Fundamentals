function secretChat(input) {
  let message = input.shift();

  for (let line of input) {
    if (line === "Reveal") {
      break;
    }

    let tokens = line.split(":|:");
    let command = tokens.shift();
    let index;
    let substr;
    let replacement;
    let firtsPart;
    let secondPart;

    switch (command) {
      case "InsertSpace":
        index = tokens[0];
        firtsPart = message.substring(0, index);
        secondPart = message.substring(index);
        message = firtsPart + " " + secondPart;
        console.log(message);

        break;

      case "Reverse":
        substr = tokens[0];
        if (!message.includes(substr)) {
          console.log("error");
        } else {
          let firstIndex = message.indexOf(substr);
          let lastIndex = firstIndex + substr.length;
          firtsPart = message.substr(0, firstIndex);
          secondPart = message.substr(lastIndex);
          let cut = message.substr(firstIndex, lastIndex);
          let reverseCut = cut.split("").reverse().join("");
          message = firtsPart + secondPart + reverseCut;
          console.log(message);
        }

        break;

      case "ChangeAll":
        substr = tokens[0];
        replacement = tokens[1];
        while (message.includes(substr)) {
          message = message.replace(substr, replacement);
        }
        console.log(message);
        break;
    }
  }
  console.log(`You have a new text message: ${message}`);
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

console.log("=================================");

secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
