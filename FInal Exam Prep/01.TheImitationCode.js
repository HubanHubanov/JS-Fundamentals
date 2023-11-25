function theImitationGame(data) {
  let codeToEncrypt = data.shift();

  let index = 0;
  let command = data[index];

  while (command !== "Decode") {
    let tokens = command.split("|");

    let currCommand = tokens[0];

    let arr = codeToEncrypt.split("");

    if (currCommand === "Move") {
      let arr = codeToEncrypt.split("");

      let nLetters = tokens[1];

      let cut = arr.splice(0, nLetters);

      arr = arr.concat(cut);

      codeToEncrypt = arr.join("");
    } else if (currCommand === "Insert") {
      let arr = codeToEncrypt.split("");

      let index = Number(tokens[1]);
      let value = tokens[2];

      arr.splice(index, 0, value);

      codeToEncrypt = arr.join("");
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
