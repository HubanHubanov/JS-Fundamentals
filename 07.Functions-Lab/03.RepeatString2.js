function repeatString(text, reps) {
  let res = "";

  for (let i = 0; i < reps; i++) {
    res += text;
  }

  return res;
}

console.log(repeatString("abc", 3));
