function towns(arr) {
  for (let currInput of arr) {
    let [town, latitude, longitude] = currInput.split(" | ");

    console.log("fafa");

    let obj = {
      town: town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };

    console.log(obj);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
