function nxnMatrix(num) {
  let res = "";

  for (i = 0; i < num; i++) {
    res += "\n";
    for (c = 0; c < num; c++) {
      res += num + " ";
    }
  }

  console.log(res);
}
nxnMatrix(3);
