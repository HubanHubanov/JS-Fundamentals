function nxnMatrix(n) {
  function rowGenerator() {
    let row = "";
    for (let i = 1; i <= n; i++) {
      row += n + " ";
    }
    return row;
  }

  for (let col = 1; col <= n; col++) {
    console.log(rowGenerator( ));
  }
}
nxnMatrix(3);
