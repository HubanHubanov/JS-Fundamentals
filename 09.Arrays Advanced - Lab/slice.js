function slice(arr, index1, index2) {
  

    console.log(slice(arr, index1, index2));
  
    function slice(arr, start, end) {
      if (start < 0) {
        start += arr.length;
      }
      if (end < 0) {
        end += arr.length;
      }
      let res = [];
      for (let i = start; i < end; i++) {
        res.push(arr[i]);
      }
  
      return res;
    }
  }
  slice([10, 20, 30, 40, 50], 1, -1);
  