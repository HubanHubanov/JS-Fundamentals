function passwordGenerator(str) {
    let firsStr = str[0];
    let secondStr = str[1];
    let word = str[2];
    let wordUpperCase = word.toUpperCase();
    let combinedStr = firsStr.concat(secondStr);
    let index = 0;
  
    for (let ch of combinedStr) {
      if ("aeiouAEIOU".indexOf(ch) !== -1) 
      {
        combinedStr = combinedStr.replace(ch, wordUpperCase[index]);
        index++;
        if (index === wordUpperCase.length) {
          index = 0;
        }
      }
    }
    let res = combinedStr.split("").reverse().join("");
    console.log(`Your generated password is ${res}`);
  }
  
  passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
  
  passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
  
  passwordGenerator([
    "areyousureaboutthisone",
    "notquitebutitrustyou",
    "disturbed",
  ]);
  