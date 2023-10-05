function login(data) {
  let username = data.shift();
  let password = username.split("").reverse().join("");

  let wrongPassCounter = 0;

  for (let i = 0; i < data.length; i++) {
    let passwordEntered = data[i];
    if (password === passwordEntered) {
      console.log(`User ${username} logged in.`);
    } else {
      if (wrongPassCounter >= 3) {
        console.log(`User ${username} blocked!`);
        break;
      }

      wrongPassCounter++;
      console.log("Incorrect password. Try again.");
    }
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
console.log("=----------------");
login(["momo", "omom"]);
console.log("=----------------");
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
