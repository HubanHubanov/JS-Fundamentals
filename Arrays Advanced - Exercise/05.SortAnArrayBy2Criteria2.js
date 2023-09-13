function sortAnArrayBy2Criteria(data) {
  let sortedArr = data.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.localeCompare(b);
  });

  sortedArr.forEach((a) => console.log(a));
}

sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("--------------------------------");
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
