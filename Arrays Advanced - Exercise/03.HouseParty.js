function houseParty(arr) {
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    let [name, word, command] = arr[i].split(" ");

    if (command === "going!") {
      if (resArr.includes(name)) {
        console.log(`${name} is already in the list!`);
        continue;
      }

      resArr.push(name);

    } else {

      if (resArr.includes(name)) {
        resArr = resArr.filter((a) => a !== name);``
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }

  console.log(resArr.join("\n"));
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
