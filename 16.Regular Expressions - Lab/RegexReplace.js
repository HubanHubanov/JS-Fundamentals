function regex() {
  let text = "Peter: 123 Mark: 456";

  let regex = /\d{3}/g;

  let replacement = 999;

  let result = text.replace(regex, replacement);

  console.log(result);
}
regex();
