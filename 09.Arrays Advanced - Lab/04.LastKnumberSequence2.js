function lastKnumberSequence(length, k) {
  let res = [];

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      res.push(1);
      continue;
    }
    let sumArr = [];
    if (i >= k) {
      sumArr = res.slice(i - k, i);
    } else {
      sumArr = res.slice(0, i);
    }

    let sum = 0;
    for (let el of sumArr) {
      sum += el;
    }
    res.push(sum);
  }

  console.log(res.join(" "));
}

lastKnumberSequence(6, 3);

lastKnumberSequence(8, 2);
