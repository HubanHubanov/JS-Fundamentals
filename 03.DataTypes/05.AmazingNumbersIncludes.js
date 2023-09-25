function amazingNumbers(number) {
    let numberToString = number.toString();
    let sum = 0;
    
  
    for (let i = 0; i < numberToString.length; i++) {
      let currentNumber = Number(numberToString[i]);
      sum += currentNumber;
    }
    let sumToString = sum.toString();
  

   let isAmazing = sumToString.includes("9") ? "True" : "False";
    
  
     console.log(`${number} Amazing? ${isAmazing}`);
  }
  
  amazingNumbers(1233);
  console.log("-------------");
  amazingNumbers(999);

  