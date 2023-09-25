function triplesOfLatinLeters(n) {
  let letterA = String.fromCharCode(97 + 0);

  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      for (let c = 0; c < n; c++) {
        let letterA = String.fromCharCode(97 + a);
        let letterB = String.fromCharCode(97 + b);
        let letterC = String.fromCharCode(97 + c);

        console.log(`${letterA}${letterB}${letterC}`);
      }
    }
  }
}
triplesOfLatinLeters(2);
    