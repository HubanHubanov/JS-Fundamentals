function secretChat(input) {
  let message = input.shift();

  for (let i = 0; i < input.length; i++) {
    let currCommand = input[i];
    if (currCommand === "Reveal") {
      break;
    }
    currCommand = currCommand.split(":|:");
    let command = currCommand.shift();

    if (command === "ChangeAll") {
      while (message.includes(currCommand[0])) {
        message = message.replace(currCommand[0], currCommand[1]);
      }
      console.log(message);
    } else if (command === "Reverse") {
      let substring = currCommand[0];
      if (message.includes(substring)) {
        message = message.replace(substring, "");
        let addedText = substring.split("").reverse().join("");
        message = message + addedText;
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (command === "InsertSpace") {
      let index = Number(currCommand[0]);
      let firstText = message.substring(0, index);
      let secondText = message.substring(index);
      message = firstText + " " + secondText;
      console.log(message);
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

secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
