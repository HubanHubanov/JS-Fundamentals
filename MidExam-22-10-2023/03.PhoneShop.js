function phoneShop(data) {
  let list = data.shift().split(", ");

  let index = 0;
  let mainCommand = data[index];

  while (mainCommand !== "End") {
    let tokens = mainCommand.split(" - ");
    let command = tokens[0];
    let phone = tokens[1];

    if (command === "Add") {
      if (!list.includes(phone)) {
        list.push(phone);
      }
    } else if (command === "Remove") {
      if (list.includes(phone)) {
        let index = list.indexOf(phone);
        list.splice(index, 1);
      }
    } else if (command === "Bonus phone") {
      let [oldPhone, newPhone] = phone.split(":");
      if (list.includes(oldPhone)) {
        let oldPhoneIndex = list.indexOf(oldPhone);
        list.splice(oldPhoneIndex + 1, 0, newPhone);
      }
    } else if (command === "Last") {
      if (list.includes(phone)) {
        let indexOfPhone = list.indexOf(phone);
        let takenPhone = list.splice(indexOfPhone, 1);
        list.push(takenPhone);
      }
    }

    index++;
    mainCommand = data[index];
  }

  console.log(list.join(", "));
}

phoneShop([
  "SamsungA50, MotorolaG5, IphoneSE",

  "Add - Iphone10",

  "Remove - IphoneSE",

  "End",
]);

phoneShop([
  "HuaweiP20, XiaomiNote",

  "Remove - Samsung",

  "Bonus phone - XiaomiNote:Iphone5",

  "End",
]);

phoneShop([
  "SamsungA50, MotorolaG5, HuaweiP10",

  "Last - SamsungA50",

  "Add - MotorolaG5",

  "End",
]);
