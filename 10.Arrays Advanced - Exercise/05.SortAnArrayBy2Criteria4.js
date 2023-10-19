function sortAnArrayBy2Criteria(arr) {
  arr.sort((a, b) => a.localeCompare(b));
  arr.sort((a, b) => a.length - b.length);
  arr.forEach((el) => console.log(el));
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);

sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
