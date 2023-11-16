function songs(arr) {
  let songsCount = arr.shift();
  let mainType = arr.pop();

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let res = [];

  for (let el of arr) {
    let tokens = el.split("_");
    let currSong = new Song(tokens[0], tokens[1], tokens[2]);
    if (mainType === "all" || mainType === currSong.typeList) {
      res.push(currSong.name);
    }
  }

  res.forEach((el) => {
    console.log(el);
  });
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
console.log("------------------");
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
console.log("------------------");

songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
