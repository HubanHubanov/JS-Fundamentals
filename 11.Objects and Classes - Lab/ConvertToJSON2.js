function convertToJSON(name, lastName, hairColor) {
  let obj = {
    name,
    lastName,
    hairColor,
  };

  let res = JSON.stringify(obj);
  console.log(res);
}
convertToJSON("George", "Jones", "Brown");
