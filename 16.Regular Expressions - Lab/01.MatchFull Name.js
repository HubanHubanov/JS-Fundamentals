function matchFullName(text) {
  let regex = /\b[A-Z]{1}[a-z]+[ ][A-Z]{1}[a-z]+\b/g;

  let res = [];

  let match = regex.exec(text);

  while (match) {
    res.push(match[0]);
    match = regex.exec(text);
  }

  console.log(res.join(" "));
}

matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov"
);
