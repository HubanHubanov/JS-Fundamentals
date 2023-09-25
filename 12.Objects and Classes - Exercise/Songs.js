function songs(arr) {
  let songsNum = arr.shift();
  let typeList = arr.pop();

  for (let line of arr) {
    let [type, name, time] = line.split("_");

    if (typeList === "all") {
      console.log(name);
    }

    if (type === typeList) {
      console.log(name);
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
console.log("----------");
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
console.log("=============");
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
