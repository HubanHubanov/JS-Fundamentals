function substring(string, start, count) {
  let res = "";
  

  for (let i = start; i < start+count; i++) {
    res += string[i];
  }
  console.log(res);
}

substring("ASentence", 3, 2);
