function mirrorWords(input) {
  let str = input[0];

  let pattern =
    /([@#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;

  let match = pattern.exec(str);

  let pairsCount = 0;
  let mirrorWords = 0;
  let buff = "";
  while (match) {
    pairsCount++;

    let firstWord = match.groups.firstWord;
    let secondWord = match.groups.secondWord;

    let secondWordReverse = secondWord.split("").reverse().join("");

    if (firstWord === secondWordReverse) {
      mirrorWords++;
      buff += `${firstWord} <=> ${secondWord}, `;
    }

    match = pattern.exec(str);
  }

  if (pairsCount === 0) {
    console.log("No word pairs found!");
    console.log("No mirror words!");
  } else {
    console.log(`${pairsCount} word pairs found!`);
    if (mirrorWords === 0) {
      console.log("No mirror words!");
    } else {
      console.log("The mirror words are:");
      let index = buff.lastIndexOf(",");
      buff = buff.substring(0, index);
      console.log(buff);
    }
  }
}

// mirrorWords([
//   "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
// ]);

// mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"])

mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
