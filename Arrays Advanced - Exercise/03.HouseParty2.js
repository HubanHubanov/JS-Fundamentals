function houseParty(arr) {
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currInput = arr[i].split(" ");

    let name = currInput[0];

    if (currInput.includes("not")) {
      if (resArr.includes(name)) {
        let nameIndex = resArr.indexOf(name);
        if (nameIndex !== -1) {
          resArr.splice(nameIndex, 1);
        }
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (resArr.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        resArr.push(name);
      }
    }
  }

  resArr.forEach((a) => console.log(a));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);

console.log("-------------------");

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
