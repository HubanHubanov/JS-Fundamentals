function hardWord(input) {
  let str = input[0];
  let strArr = str.split(" ");
  let wordsArr = input[1];

  for (let el of strArr) {
    for (let word of wordsArr) {
      if (el.startsWith("_")) {
        if (el.endsWith("_")) {
          if (el.length === word.length) {
            str = str.replace(el, word);
          }
        } else {
          let replacement = el.substring(0, el.length - 1);
          if (replacement.length === word.length) {
            str = str.replace(replacement, word);
          }
        }
      }
    }
  }
  console.log(str);
}

hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
