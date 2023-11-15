function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      return `says Meow`;
    }
  }

  for (let el of arr) {
    let [currName, currAge] = el.split(" ");
    let currCat = new Cat(currName, currAge);
    console.log(`${currCat.name}, age ${currCat.age}`, currCat.meow());
  }
}

// cats(['Mellow 2', 'Tom 5'])
cats(["Candy 1", "Poppy 3", "Nyx 2"]);
