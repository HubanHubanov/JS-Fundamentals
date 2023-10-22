function theBiscuitFactory(data) {
  let = biscuitsPerDay = Number(data.shift());
  let = workersNum = Number(data.shift());
  let = totalCompetitionNum = Number(data.shift());

  let totalBiscuits = 0;

  for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
      totalBiscuits += Math.floor(0.75 * (biscuitsPerDay * workersNum));
    } else {
      totalBiscuits += Math.floor(biscuitsPerDay * workersNum);
    }
  }

  console.log(
    `You have produced ${totalBiscuits} biscuits for the past month.`
  );

  let difference = totalBiscuits - totalCompetitionNum;
  let percentage = Math.abs((difference / totalCompetitionNum) * 100);

  if (totalBiscuits > totalCompetitionNum) {
    console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
  } else {
    console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
  }
}

// theBiscuitFactory(["78", "8", "16000"]);

// theBiscuitFactory(["65", "12", "26000"]);

theBiscuitFactory(["163", "16", "67020"]);
