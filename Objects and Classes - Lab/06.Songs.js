function songs(arr) {
    // class Song {
    //   constructor(typeList, name, time) {
    //     this.typeList = typeList;
    //     this.name = name;
    //     this.time = time;
    //   }
    // }

  let numberOfSongs = arr[0];
  let typeList1 = arr[arr.length - 1];

  for (let i = 1; i <= numberOfSongs; i++) {
    let currInput = arr[i];

    let [typeList, name, time] = currInput.split("_");

    if (typeList1 === "all") {
      console.log(name);
      continue;
    }

    if (typeList === typeList1) {
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
console.log("===================");
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
console.log("--------------");
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
