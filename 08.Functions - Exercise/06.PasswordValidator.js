function passwordValidator(pass) {

    let passLength = pass.length
    let digitCount = 0
    let wrongLength = false
    let wrongChars = false
    let wrongNumDigits = false
    let isNotValid = false

    if(passLength < 6 || passLength > 10) {
        wrongLength = true
        isNotValid = true
    }

   for (let i = 0; i < passLength; i ++) {

   let currChar = pass[i]
   let charAsNum = currChar.charCodeAt()

    if(!((charAsNum >= 48 && charAsNum <=57) || (charAsNum >= 65 && charAsNum <= 90) || (charAsNum >= 97 && charAsNum <= 122))) {
       wrongChars = true
       isNotValid = true
       } 

    if (charAsNum >= 48 && charAsNum <=57) {
        digitCount++
    }

}

if (digitCount < 2) {   
    wrongNumDigits = true
    isNotValid = true
 }


if (!(isNotValid)) {
    console.log("Password is valid");
} else {
    if (wrongLength) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (wrongChars) {
        console.log("Password must consist only of letters and digits");
    }
    if (wrongNumDigits) {
        console.log("Password must have at least 2 digits")
    }
}
}

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')