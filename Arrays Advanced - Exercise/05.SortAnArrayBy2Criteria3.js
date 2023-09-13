function sortAnArrayBy2Criteria(data) {

    let sortedArr = data.sort((a,b) => {
     return  a.length - b.length || a.localeCompare(b)
    } )
 
   console.log(sortedArr.join("\n"));
  }
  
  sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
  console.log("--------------------------------");
  sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
  