function charactersInRange(firstChar, secondChar) {
  let firstCharAsNum = firstChar.charCodeAt();
  let secondCharAsNum = secondChar.charCodeAt();
  let startNum = Math.min(firstCharAsNum, secondCharAsNum);
  let endNum = Math.max(firstCharAsNum, secondCharAsNum);

  let res = "";
  for (let i = startNum + 1; i < endNum; i++) {
    let char = String.fromCharCode(i);
    res += char + " ";
  }

  console.log(res);
}
charactersInRange("a", "d");

charactersInRange("#", ":");

charactersInRange("C", "#");
