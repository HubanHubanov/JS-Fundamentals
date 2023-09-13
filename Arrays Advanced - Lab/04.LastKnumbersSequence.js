function lastKnumbersSequence(n, k) {

  let resArr = [1];

  for (let i = 1; i < n ; i++) {
    let previousKelementsArr = resArr.slice(-k);

    let sumPreviousKelements = 0;

    for (let j = 0; j < previousKelementsArr.length; j++) {
      sumPreviousKelements += previousKelementsArr[j];
    }

    resArr.push(sumPreviousKelements);

  }

  console.log(resArr.join(" "));

}

lastKnumbersSequence(6, 3);
lastKnumbersSequence(8, 2);
