function passwordReset(input) {
  let str = input.shift();

  for (let line of input) {
    if (line === "Done") {
      break;
    }

    let tokens = line.split(" ");
    let command = tokens.shift();

    switch (command) {
      case "TakeOdd":
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
          if (i % 2 !== 0) {
            newStr += str[i];
          }
        }
        str = newStr;
        console.log(str);

        break;

      case "Cut":
        let index = Number(tokens[0]);
        let length = Number(tokens[1]);
        let substr = str.substring(index, index + length);
        str = str.replace(substr, "");

        console.log(str);

        break;

      case "Substitute":
        let substring = tokens[0];
        let substitute = tokens[1];

        if (!str.includes(substring)) {
          console.log("Nothing to replace!");
        } else {
          while (str.includes(substring)) {
            str = str.replace(substring, substitute);
          }
          console.log(str);
        }
        break;
    }
  }

  console.log(`Your password is: ${str}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
console.log("------------------");
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
