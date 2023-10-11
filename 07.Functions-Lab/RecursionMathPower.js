function recursionPow(n, exponent) {
  if (exponent === 0) {
    return (n = 1);
  } else {
    return n * recursionPow(n, exponent - 1);
  }
}

console.log(recursionPow(3, 4));
    