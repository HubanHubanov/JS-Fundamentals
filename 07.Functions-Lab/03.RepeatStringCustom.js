function repeatString(text, n) {
  let buff = "";

  for (let i = 0; i < n; i++) {
    buff += text;
  }
  console.log(buff);
}
repeatString("abc", 3);
repeatString("String", 2);
