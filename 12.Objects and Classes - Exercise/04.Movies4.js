function movies(input) {
  let moviesData = [];

  for (let el of input) {
    let movies = {};
    if (el.includes("add")) {
      let name = el.split("addMovie ")[1];
      movies.name = name;
      moviesData.push(movies);
    }

    if (el.includes("directedBy")) {
      let [name, director] = el.split(" directedBy ");

      let found = moviesData.find((x) => x.name === name);

      if (found) {
        found.director = director;
      }
    }
    if (el.includes("onDate")) {
      let [name, date] = el.split(" onDate ");

      let found = moviesData.find((x) => x.name === name);

      if (found) {
        found.date = date;
      }
    }
  }

  for (let el of moviesData) {
    let entries = Object.entries(el);

    if (el.name && el.director && el.date) {
      console.log(JSON.stringify(el));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
