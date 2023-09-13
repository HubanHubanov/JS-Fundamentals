function charactersInRange(firstCharacter, secondCharacter) {
  let firstCharactarInAscii = firstCharacter.charCodeAt();
  let secondCharacterAscii = secondCharacter.charCodeAt();

  let smallerNumber = Math.min(firstCharactarInAscii, secondCharacterAscii);
  let biggestNumber = Math.max(firstCharactarInAscii, secondCharacterAscii);

  let resultArr = [];

  for (let i = smallerNumber + 1; i < biggestNumber; i++) {
    let numAsAsciiChar = String.fromCharCode(i);

    resultArr.push(numAsAsciiChar);
  }

  return resultArr.join(" ");
}

console.log(charactersInRange("a", "d"));

console.log(charactersInRange("#", ":"));

console.log(charactersInRange("C", "#"));
