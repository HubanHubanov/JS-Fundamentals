function charactersInRange(firstCharacter, secondCharacter) {

    let firstCharacterAscii = firstCharacter.charCodeAt(0);
    let secondCharacterAscii = secondCharacter.charCodeAt(0);;
  
    let result = "";
  
    if (firstCharacterAscii < secondCharacterAscii) {
  
      for (let i = firstCharacterAscii + 1; i < secondCharacterAscii; i++) {
  
        let asciiNumToCharacter = String.fromCharCode(i);
  
        result += asciiNumToCharacter + " ";
      }
  
    } else if (firstCharacterAscii > secondCharacterAscii) {
  
      for (let i = secondCharacterAscii + 1; i < firstCharacterAscii; i++) {
        
        let asciiNumToCharacter = String.fromCharCode(i);
  
        result += asciiNumToCharacter + " ";
      }
    }
  
    return result
  }
  
  console.log(charactersInRange("a", "d"));
  
  console.log(charactersInRange("#", ":"));
  
  console.log(charactersInRange("C", "#"));
  
  