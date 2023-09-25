function solve(data) {
  let arr = [];

  for (let line of data) {
    let obj = {};

    if (line.includes("addMovie ")) {
      let name = line.split("addMovie ")[1];
      obj.name = name;
      arr.push(obj);
    } else if (line.includes("directedBy")) {
      let [name, director] = line.split(" directedBy ");

      let found = arr.find((x) => x.name === name);

      if (found) {
        found.director = director;
      }
    } else if (line.includes("onDate")) {
      let [name, date] = line.split(" onDate ");

      let found = arr.find((x) => x.name === name);

      if (found) {
        found.date = date;
      }
    }
  }

  arr.forEach((el) => {
    if (el.name && el.director && el.date) {
      console.log(JSON.stringify(el));
    }
  });
}

solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
