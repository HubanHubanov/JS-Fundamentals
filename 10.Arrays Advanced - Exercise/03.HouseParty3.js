function houseParty(arr) {
  let res = [];

  for (let el of arr) {
    let tokens = el.split(" ");
    let name = tokens[0];

    if (tokens.includes("not")) {
      if (res.includes(name)) {
        res = res.filter((n) => n !== name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (!res.includes(name)) {
        res.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    }
  }

  for (let el of res) {
    console.log(el);
  }
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
