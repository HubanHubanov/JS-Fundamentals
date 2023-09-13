function employees(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currName = arr[i];
    let personalNum = currName.length;
    console.log(`Name: ${currName} -- Personal Number: ${personalNum}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
