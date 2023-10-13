function passwordValidator(pass) {
  let isValid = true;
  let lengthError = false;
  let typeError = false;
  let digitsError = false;

  if (pass.length < 6 || pass.length > 10) {
    isValid = false;
    lengthError = true;
  }

  let digitCounter = 0;
  for (let i = 0; i < pass.length; i++) {
    let charInAscii = pass[i].charCodeAt();

    if (
      !((charInAscii > 47 && charInAscii < 58) ||
      (charInAscii > 96 && charInAscii < 123) ||
      (charInAscii > 64 && charInAscii < 91))
    ) {
      isValid = false;
      typeError = true;
    }

    if (charInAscii > 47 && charInAscii < 58) {
      digitCounter++;
    }

  }
  if (digitCounter < 2) {
    isValid = false;
    digitsError = true;
  }

  if (isValid) {
    console.log("Password is valid");
  }
  if (lengthError) {
    console.log(`Password must be between 6 and 10 characters`);
  }

  if (typeError) {
    console.log("Password must consist only of letters and digits");
  }

  if (digitsError) {
    console.log("Password must have at least 2 digits");
  }
}
passwordValidator("logIn");

passwordValidator('MyPass123')

passwordValidator('Pa$s$s')
