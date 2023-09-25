function rightPlace(string1, char, string2) {
  let string1Replace = string1.replace("_", char);

  if (string1Replace === string2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "I", "Strong");
console.log("--------------");
rightPlace("Str_ng", "i", "String");
