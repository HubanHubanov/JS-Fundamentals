function modernTimesOfHashTag(str) {
  let pattern = /#(?<word>[a-zA-Z]+)/g;

  let match = pattern.exec(str);

  while (match) {
    console.log(match.groups.word);
    match = pattern.exec(str);
  }
}

modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);

modernTimesOfHashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
