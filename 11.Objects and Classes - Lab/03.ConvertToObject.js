function convertToObject(string) {
  let obj = JSON.parse(string);

  let entries = Object.entries(obj);

  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
