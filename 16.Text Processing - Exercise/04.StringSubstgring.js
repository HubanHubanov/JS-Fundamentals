function stringSubstring(word, text) {
  let textArr = text.split(" ");
  wordCheck = word.toLowerCase();

  let isFound = false;

  for (let el of textArr) {
    el = el.toLowerCase();
    if (el === wordCheck) {
      console.log(word);
      isFound = true;
      break;
    }
  }
  if (!isFound) {
    console.log(`${word} not found!`);
  }
}

stringSubstring("JAVascrIpt", "JavaScriPt is the best programming language");

stringSubstring("python", "JavaScript is the best programming language");
