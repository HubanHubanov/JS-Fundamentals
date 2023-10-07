function reverseInPlce(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let elToPutFirst = arr[arr.length - 1 - i];
    let elToPutAtEnd = arr[i];

    arr[i] = elToPutFirst;
    arr[arr.length - 1 - i] = elToPutAtEnd;
  }
  console.log(arr.join(" "));
}
reverseInPlce(["a", "b", "c", "d", "e"]);
