function cutAndReverse(str) {
  let firstPart = [];
  let secondPart = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (i < str.length / 2) {
      firstPart.push(ch);
    } else {
      secondPart.push(ch);
    }
  }

  console.log(firstPart.reverse().join(""));
  console.log(secondPart.reverse().join(""));
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");

cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
