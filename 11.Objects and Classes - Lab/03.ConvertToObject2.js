function convertToObject(string) {
  let res = JSON.parse(string);

  let entries = Object.entries(res);

  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');

convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')