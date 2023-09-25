function loadingBar(num) {
  let bar = "";

  for (let i = 1; i <= 10; i++) {
    if (i <= num / 10) {
      bar += "%";
    } else {
      bar += ".";
    }
  }

  if (num === 100) {
    console.log("100% Complete!");
  } else {
    console.log(`${num}% [${bar}]`);
    console.log("Still loading...");
  }
}

loadingBar(0);
