function loadingBar(num) {
  if (num === 100) {
    console.log("100% Complete!");
  } else if (num > 0) {
    console.log(
      `${num}% [${"%".repeat(num / 10)}${".".repeat(10 - num / 10)}]`
    );
    console.log("Still loading...");
  } else {
    console.log(`[${"%".repeat(10)}]`);
  }
}

loadingBar(30);
loadingBar(90);
loadingBar(100);
loadingBar(0);
