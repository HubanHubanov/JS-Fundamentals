function ladybugs(data) {
    let size = data.shift();
    let indexes = data.shift().split(" ");
  
    let field = [];
  
    for (let i = 0; i < size; i++) {
      field.push(0);
    }
  
    // for (let i = 0; i < indexes.length; i++) {
    //   let currIndex = Number(indexes[i]);
    //   if(currIndex>= 0 && currIndex < field.length) {
    //   field[currIndex] = 1;
    //   }
    // }
  
  
    for (let i = 0; i < indexes.length; i++) {
      let currIndex = Number(indexes[i]);
      if ((currIndex >= 0 && currIndex < field.length)) {
        field.splice(currIndex, 1, 1);
      }
    }
  
    for (let i = 0; i < data.length; i++) {
      let tokens = data[i].split(" ");
      let index = Number(tokens[0]);
      let direction = tokens[1];
      let length = Number(tokens[2]);
  
      if (direction === "right") {
        if (field[index] === 1) {
           field.splice(index, 1, 0);
          for (let j = index + length; j < field.length; j += length) {
            if (field[j] === 0) {
              field.splice(j, 1, 1);
              break;
            }
          }
        }
      } else if (direction === "left") {
        if (field[index] === 1) {
           field.splice(index, 1, 0);
          for (let k = index - length; k >= 0; k -= length) {
            if (field[k] === 0) {
              field.splice(k, 1, 1);
              break;
            }
          }
        }
      }
    }
    console.log(field.join(" "));
  }
  
  ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
  
  ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
  
  ladybugs([5, "3", "3 left 2", "1 left -2"]);
  