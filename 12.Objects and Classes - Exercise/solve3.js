function towns(data) {
  arr = [];

  data.forEach((line) => {
    let [town, latitude, longitude] = line.split(" | ");

   latitude = Number(latitude).toFixed(2)
   longitude = Number(longitude).toFixed(2)

    let obj = {
      town,
      latitude,
      longitude,
    };
    arr.push(obj);
  });

  arr.forEach((x) => console.log(x));
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
