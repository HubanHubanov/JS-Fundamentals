function sortAnArrayBy2Criteria(data) {
//   data.sort((a, b) => a.localeCompare(b));
  data.sort();

  data.sort((a, b) => a.length - b.length);

  console.log(data.join("\n"));

//   data.forEach((a) => console.log(a))
}

sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("--------------------------------");
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
