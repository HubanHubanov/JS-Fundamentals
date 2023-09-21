function towns(data) {
  let arr = [];

  data.forEach((line) => {
    let [town, latitude, longitude] = line.split(" | ");

    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    let obj = {};
    obj.town = town;
    obj.latitude = latitude;
    obj.longitude = longitude;

    arr.push(obj);
  });

  for (el of arr) {
    console.log(el);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
