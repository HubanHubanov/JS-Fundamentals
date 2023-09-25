function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let firstSwap = arr[i];
    let secondSwap = arr[arr.length - 1 - i];

    arr[i] = secondSwap;
    arr[arr.length - 1 - i] = firstSwap;
  }
  console.log(arr.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
