function mirrorWords(input) {
  let text = input[0];

  let regex =
    /([#@])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/gm;

  let matchCount = text.match(regex);

  let match = regex.exec(text);

  if (!match) {
    console.log("No word pairs found!");
    console.log("No mirror words!");
    return;
  } else {
    console.log(`${matchCount.length} word pairs found!`);
  }

  let mirrorWords = [];

  while (match) {
    let firstWord = match.groups.firstWord;
    let secondWord = match.groups.secondWord;
    let secondWordReversed = secondWord.split("").reverse().join("");

    if (firstWord === secondWordReversed) {
      mirrorWords.push(`${firstWord} <=> ${secondWord}`);
    }

    match = regex.exec(text);
  }

  if (mirrorWords.length === 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(mirrorWords.join(", "));
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);

mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
