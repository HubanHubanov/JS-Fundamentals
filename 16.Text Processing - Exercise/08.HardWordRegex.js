function hardWord(input) {
  let str = input[0];
  let strArr = str.split(" ");
  let wordsArr = input[1];

  let pattern = /[_]+/g;

  let match = pattern.exec(str);

  while (match) {
    for (let el of wordsArr) {
      if (el.length === match[0].length) {
        str = str.replace(match, el);
      }
    }
    match = pattern.exec(str);
  }

  console.log(str);
}

hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
