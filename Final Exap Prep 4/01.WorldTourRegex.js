function worldTour(input) {
  let stops = input.shift();

  let currCommand = input.shift();

  while (currCommand !== "Travel") {
    let tokens = currCommand.split(":");

    let command = tokens.shift();

    switch (command) {
      case "Add Stop":
        let index = Number(tokens[0]);
        let string = tokens[1];
        if (index >= 0 && index < stops.length) {
          let textFirstPart = stops.substring(0, index);
          let textSecondPart = stops.substring(index);
          stops = textFirstPart + string + textSecondPart;
        }
        console.log(stops);
        break;

      case "Remove Stop":
        let startIndex = Number(tokens[0]);
        let endIndex = Number(tokens[1]);

        if (
          startIndex >= 0 &&
          startIndex < stops.length &&
          endIndex >= 0 &&
          endIndex < stops.length 
  
        ) {
          let removed = stops.substring(startIndex, endIndex + 1);
          stops = stops.replace(removed, "");
        }
        console.log(stops);
        break;

      case "Switch":
        let oldString = tokens[0];
        let newString = tokens[1];

        let pattern = new RegExp(oldString, "g");

        stops = stops.replace(pattern, newString);

        console.log(stops);

        break;
    }
    currCommand = input.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour([
  "Hawai::Cyprys-GreeceHawaiHawai",

  "Add Stop:7:Rome",

  "Remove Stop:11:16",

  "Switch:Hawai:Bulgaria",

  "Travel",
]);
