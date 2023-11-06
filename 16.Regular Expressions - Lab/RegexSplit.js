function regex() {
  let text = "1   2 3     4";

  let regex = /\s+/g;

  let match = text.match(regex);

  let res = text.split(regex);

  console.log(text);

  console.log(match);

  console.log(res);
}

regex();
