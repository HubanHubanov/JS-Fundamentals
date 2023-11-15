function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let el of arr) {
    let [currName, currAge] = el.split(" ");
    let currCat = new Cat(currName, currAge);
    currCat.meow();
  }
}

cats(["Candy 1", "Poppy 3", "Nyx 2"]);
