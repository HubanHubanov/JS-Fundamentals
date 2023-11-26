function emojiDetector(input) {
  let str = input[0];

  let pattern = /([:]{2}|[*]{2})(?<emoji>[A-Z]{1}[a-z]{2,})\1/g
  let digitPattern = /[0-9]/g;
  let digitsMatch = str.match(digitPattern);

  let coolTreshhold = 1;
  for (let el of digitsMatch) {
    coolTreshhold *= Number(el)
  }

  let match = pattern.exec(str);

  let coolEmojies = [];
  let emojiCounter = 0;

  while (match) {
    emojiCounter++;

    let emoji = match.groups.emoji;

    let chSum = 0;
    for (let ch of emoji) {
      let value = ch.charCodeAt();
      chSum += value;
    }

    if (chSum >= coolTreshhold) {
      coolEmojies.push(match[0]);
    }

    match = pattern.exec(str);
  }

  console.log(`Cool threshold: ${coolTreshhold}`);
  console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
  for (let el of coolEmojies) {
    console.log(el);
  }
}

emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley: This includes 3 *Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and0 21 different types of :Snak::Es::. :Mooning:: **Shy**",
]);
// console.log("----------------------");
// emojiDetector([
//   "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
// ]);
// console.log("----------------------");

// emojiDetector([
//   "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
// ]);
