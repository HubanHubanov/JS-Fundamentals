function songs(arr) {
  class Songs {
    constructor(type, name, time) {
      this.type = type,
      this.name = name,
      this.time = time;
    }
  }

  let songsNum = arr.shift();
  let fileType = arr.pop();

  let resArr =[]

  for (line of arr) {
      let [type, name, time] = line.split("_")

     let song = new Songs(type, name, time)
     resArr.push(song)
    }

    for (let el of resArr) {
        if( fileType === "all") {
            songs.forEach(x=> console.log(x.name))
        } else {
            let filtered = songs.filter((x) => x.type === fileType);
                filtered.forEach((x))
            
        }
    }
 
}


songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
// console.log("----------");
// songs([
//   4,
//   "favourite_DownTown_3:14",
//   "listenLater_Andalouse_3:24",
//   "favourite_In To The Night_3:58",
//   "favourite_Live It Up_3:48",
//   "listenLater",
// ]);
// console.log("=============");
// songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
