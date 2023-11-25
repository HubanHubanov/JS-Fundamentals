function theImitationGame(data) {
  let codeToEncrypt = data.shift();

  let index = 0;
  let command = data[index];

  while (command !== "Decode") {
    let tokens = command.split("|");

    let currCommand = tokens[0];

    if (currCommand === "Move") {
      let nLetters = tokens[1];
      let strToAdd = codeToEncrypt.substring(0, nLetters);
      let strLeft = codeToEncrypt.substring(nLetters);
      codeToEncrypt = strLeft.concat(strToAdd);
    } else if (currCommand === "Insert") {
      let index = Number(tokens[1]);
      let value = tokens[2];
      let firstPart = codeToEncrypt.substring(0, index);
      let secondPart = codeToEncrypt.substring(index);
      codeToEncrypt = firstPart + value + secondPart;
    } else if (currCommand === "ChangeAll") {
      let substr = tokens[1];
      let replacement = tokens[2];

      while (codeToEncrypt.includes(substr)) {
        codeToEncrypt = codeToEncrypt.replace(substr, replacement);
      }
    }

    index++;
    command = data[index];
  }

  console.log(`The decrypted message is: ${codeToEncrypt}`);
}

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
