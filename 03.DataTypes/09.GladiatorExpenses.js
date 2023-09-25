function gladiatorExpenses(
  lostFightCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  shieldBreaksCount = 0;

  for (let i = 1; i <= lostFightCount; i++) {
    if (i % 2 === 0) {
      expenses += helmetPrice;
    }

    if (i % 3 === 0) {
      expenses += swordPrice;
    }

    if (i % 2 === 0 && i % 3 === 0) {
      expenses += shieldPrice;
      shieldBreaksCount++;
    }

    if (shieldBreaksCount === 2) {
      expenses += armorPrice;
      shieldBreaksCount = 0;
    }
  }

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.5, 21.5, 40, 200);
