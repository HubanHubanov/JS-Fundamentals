function censoredWords(text, word) {
    // let res = text.replaceAll(word, "*".repeat(word.length));
  
    while (text.includes(word)) {
      text = text.replace(word, "*".repeat(word.length));
    }
  
    console.log(text);
  }
  
  censoredWords(
    " Small, small sentence smallred with smallsmall words small.",
    "small"
  );
  