function city(obj) {
  let keys = Object.keys(obj);

  for (let key of keys) {
    console.log(`${key} -> ${obj[key]}`);
  }
}

city({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});

function city2(obj) {
  for (let key in obj) {
    console.log(key + " -> " + obj[key]);
  }
}

city2({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});

function city3(obj) {
  let entries = Object.entries(obj);

  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}

city3({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
