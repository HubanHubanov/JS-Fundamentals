function signCheck(a, b, c) {
  let positiveCounter = 0;
  let negativeCounter = 0;

  let aSign = a > 0 ? positiveCounter++ : negativeCounter++;
  let bSign = b > 0 ? positiveCounter++ : negativeCounter++;
  let cSign = c > 0 ? positiveCounter++ : negativeCounter++;

  if (negativeCounter === 1 || negativeCounter === 3) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}
signCheck(5, 12, -15);

// signCheck(-6, -12, 14);
