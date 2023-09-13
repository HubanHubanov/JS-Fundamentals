function personalInfo(firstName, lastName, age) {
  myObj = {};
  myObj.firstName = firstName;
  myObj.lastName = lastName;
  myObj.age = age;

  return myObj;
}
console.log(personalInfo("Peter", "Pan", "20"));
