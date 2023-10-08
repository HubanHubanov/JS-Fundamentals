function equalArrays(firstArr, secondArr) {
    let sum = 0;
    let index = 0;
    let notIdentical = false;
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] === secondArr[i]) {
        sum += Number(firstArr[i]);
      } else {
        index = i;
        notIdentical = true;
        break;
      }
    }
  
    if (notIdentical) {
      console.log(`Arrays are not identical. Found difference at ${index} index`);
    } else {
      console.log(`Arrays are identical. Sum: ${sum}`);
    }
  }
  equalArrays(["10", "20", "30"], ["10", "20", "30"]);
  
  // equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
  
  // equalArrays(['1'], ['10'])
  