function maxSequenceOfEqualSums(arr) {
  let maxNum = 0;
  let matches = 1;
  let maxMatches = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i >= 1) {
      let currNum = arr[i];
      let prevNum = arr[i - 1];

      if (currNum === prevNum) {
        matches++;
        if (matches > maxMatches) {
          maxMatches = matches;
          maxNum = currNum;
        }
      } else {
        matches = 1;
      }
    }
  }
  console.log(`${maxNum} `.toString().repeat(maxMatches));
}
maxSequenceOfEqualSums([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

maxSequenceOfEqualSums([1, 1, 1, 2, 3, 1, 3, 3]);

maxSequenceOfEqualSums([4, 4, 4, 4]);

maxSequenceOfEqualSums([0, 1, 1, 5, 2, 2, 6, 3, 3]);
