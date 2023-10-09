function reverseInPlce(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      let j = arr.length - 1 - i;
  
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  
    console.log(arr.join(" "));
  }
  reverseInPlce(["a", "b", "c", "d", "e"]);
  