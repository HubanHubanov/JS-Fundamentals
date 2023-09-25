function arraysManipulations(data) {

  let arr = data.shift().split(" ").map(Number)
 
  for (let i = 0; i < data.length; i ++) {
    let currData = data[i].split( " ")

    let command = currData[0]
    let firstNum = Number(currData[1])
    let secondNum = Number(currData[2])
    
     switch(command) {
      
      case "Add": arr.push(firstNum); break;
      
      case "Remove": arr = arr.filter((a) => a !== firstNum); break;
    
      case "RemoveAt": arr.splice(firstNum, 1); break;
    
      case "Insert": arr.splice(secondNum, 0, firstNum); break;
     
    }
    
      }
  
  console.log(arr.join(" "))

}

arraysManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);


