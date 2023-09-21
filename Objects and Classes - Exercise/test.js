function solve(firstName, lastName, age) {
let obj = {
    firstName,
    lastName,
    age,
};

return obj;
}

console.log(solve("Peter", "Pan", "20"));

function solve(obj) {
  for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
solve({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});

function solve(JSONstring) {
  let obj = JSON.parse(JSONstring);

  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');

function solve(name, lastName, hairColor) {
  let obj = {
    name,
    lastName,
    hairColor,
  };

  let res = JSON.stringify(obj);

  console.log(res);
}
solve("George", "Jones", "Brown");



function cats(arr) {
  class Cat {
    constructor(name, age) {
      (this.name = name), (this.age = age);
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  arr.forEach((el) => {
    let [name, age] = el.split(" ");
    let currCat = new Cat(name, age);
    currCat.meow();
  });
}
cats(["Mellow 2", "Tom 5"]);
