function modernTimesOfHashTag(str) {
  let arr = str.split(" ");

  for (let el of arr) {
    let notSpecial = false;
    if (!el.startsWith("#")) {
      continue;
    } else {
      if (el.length === 1) {
        notSpecial = true;
        continue;
      }
      for (i = 1; i < el.length; i++) {
        let num = el[i].charCodeAt();
        if (!((num >= 65 && num <= 90) || (num >= 97 && num <= 122))) {
          notSpecial = true;
          continue;
        }
      }
    }
    if (notSpecial) {
      continue;
    }
    console.log(el.substring(1));
  }
}

modernTimesOfHashTag("Nowadays # tag #special word in #socialMedia");

  modernTimesOfHashTag(
    "The symbol # is known #variously in English-speaking #regions as the #number sign"
  );
