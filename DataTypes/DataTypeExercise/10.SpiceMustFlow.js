function spiceMustFlow(yield) {
  let spiceStorage = 0;
  let days = 0;

  while (yield >= 100) {
    days += 1;
    spiceStorage += yield;
    spiceStorage -= 26;
    yield -= 10;
  }

  spiceStorage -= 26;

  if (spiceStorage < 0) {
    spiceStorage = 0;
  }
  console.log(days);
  console.log(spiceStorage);
}

spiceMustFlow(50);
