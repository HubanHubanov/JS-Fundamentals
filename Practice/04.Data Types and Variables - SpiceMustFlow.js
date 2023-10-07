function spiceMustFlow(yield) {
  let yieledSupply = 0;
  let daysNum = 0;

  while (yield >= 100) {
    daysNum++;

    yieledSupply += yield;
    yieledSupply -= 26;

    yield -= 10;
  }
  yieledSupply -= 26;

  if (yieledSupply < 0) {
    yieledSupply = 0;
  }

  console.log(daysNum);
  console.log(yieledSupply);
}

spiceMustFlow(111);

spiceMustFlow(450);
