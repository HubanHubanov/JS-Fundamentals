function personInfo(firstName, lastName, age) {
  let obj = {};
  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.age = age;

return obj
}

console.log(personInfo("Peter", "Pan", "20"));

function personInfo1(firstName, lastName, age) {
  let obj = {
    firstName,
    lastName,
    age,
  };

  return obj
}

console.log(personInfo1("Peter", "Pan", "20"));

function personInfo2(firstName, lastName, age) {
    let obj = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
  
    return obj
  }
  
  console.log(personInfo2("Peter", "Pan", "20"));

  function personInfo3(firstName, lastName, age) {
    let obj = {}

    obj["firstName"] = firstName;
    obj["lastName"] = lastName;
    obj["age"] = age
  
    return obj
  }
  
  console.log(personInfo3("Peter", "Pan", "20"));


