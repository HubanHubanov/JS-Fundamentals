function repeatString(str, n) {
    let result = "";
  
    for (let i = 0; i < n; i++) {
      result += str;
    }
    return result
  }

//   console.log(repeatString("String", 2));

  let resultFromFunction = repeatString("abc", 3);
  console.log(resultFromFunction);
  
  
  