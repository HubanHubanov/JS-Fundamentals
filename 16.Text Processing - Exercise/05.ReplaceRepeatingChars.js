function replaceRepeatingChars(text) {
  let res = "";

  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      res += text[i];
      continue;
    }
    let currCh = text[i];
    let prevCh = text[i - 1];
    if (currCh !== prevCh) {
      res += currCh;
    }
  }

  console.log(res);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");

replaceRepeatingChars("qqqwerqwecccwd");
