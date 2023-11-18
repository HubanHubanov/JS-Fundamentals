function movies(data) {
  let res = [];

  for (let el of data) {
    let obj = {};
    let tokens = el.split(" ");
    if (tokens.includes("addMovie")) {
      tokens.shift();
      let movieName = tokens.join(" ");
      obj.name = movieName;

      res.push(obj);
    } else if (tokens.includes("directedBy")) {
      let [name, director] = el.split(" directedBy ");

      for (let movieObj of res) {
        let value = Object.values(movieObj);
        if (value[0] === name) {
          movieObj.director = director;
        }
      }
    } else if (tokens.includes("onDate")) {
      let [name, date] = el.split(" onDate ");

      for (let movieObj of res) {
        let value = Object.values(movieObj);
        if (value[0] === name) {
          movieObj.date = date;
        }
      }
    }
  }

  for (let el of res) {
    if (
      el.hasOwnProperty("name") &&
      el.hasOwnProperty("director") &&
      el.hasOwnProperty("date")
    ) {
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

//  movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
//     ]
//     )
