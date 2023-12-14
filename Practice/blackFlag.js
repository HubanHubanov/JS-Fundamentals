function blackFlag(input) {
  let numDays = Number(input.shift());
  let plunderPerDay = Number(input.shift());
  let expectedPlunder = Number(input[0]);

  let plunder = 0;
  for (let i = 1; i <= numDays; i++) {
    plunder += plunderPerDay;
    if (i % 3 === 0) {
      plunder += 0.5 * plunderPerDay;
    }

    if (i % 5 === 0) {
      plunder -= 0.3 * plunder;
    }
  }

  if (plunder >= expectedPlunder) {
    console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (plunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}

blackFlag(["5", "40", "100"]);

blackFlag(["10", "20", "380"]);
