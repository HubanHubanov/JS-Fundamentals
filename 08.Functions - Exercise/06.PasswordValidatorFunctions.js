function passwordValidator(pass) {
  let isValid = true;

  lengthCheck(pass);
  typeCheck(pass);
  digitCheck(pass);
  validPass(pass);

  function lengthCheck() {
    if (pass.length < 6 || pass.length > 10) {
      isValid = false;
      return console.log(`Password must be between 6 and 10 characters`);
    }
  }

  function typeCheck() {
    for (let i = 0; i < pass.length; i++) {
      let charInAscii = pass[i].charCodeAt();

      if (
        !(
          (charInAscii > 47 && charInAscii < 58) ||
          (charInAscii > 96 && charInAscii < 123) ||
          (charInAscii > 64 && charInAscii < 91)
        )
      ) {
        isValid = false;
        return console.log("Password must consist only of letters and digits");
      }
    }
  }

  function digitCheck() {
    let digitCounter = 0;

    for (let i = 0; i < pass.length; i++) {
      let charInAscii = pass[i].charCodeAt();

      if (charInAscii > 47 && charInAscii < 58) {
        digitCounter++;
      }
    }

    if (digitCounter < 2) {
      isValid = false;
      return console.log("Password must have at least 2 digits");
    }
  }

  function validPass() {
    if (isValid) {
      return console.log("Password is valid");
    }
  }
}
// passwordValidator("logIn");

// passwordValidator("MyPass123");

// passwordValidator("Pa$s$s");
