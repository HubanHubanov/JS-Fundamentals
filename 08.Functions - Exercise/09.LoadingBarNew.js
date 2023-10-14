function loadingBar(n) {
  if (n === 100) {
    console.log("100% Complete!");
  } else {
    let bar = n / 10;
    let resScale = "%".repeat(bar) + ".".repeat(10 - bar);
    let res = `${bar * 10}% [${resScale}]`;
    console.log(res);
    console.log("Still loading...");
  }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);

