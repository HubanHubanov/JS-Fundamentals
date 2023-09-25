function echoType(input) {
  console.log(typeof input);
  if (typeof input === "number" || typeof input === "string") {
    console.log(input);
  } else {
    console.log(`Parameter is not suitable for printing`);
  }
}

echoType("Hello, JavaScript!");
console.log("------------");
echoType(18);
console.log("-------------");
echoType(null);
