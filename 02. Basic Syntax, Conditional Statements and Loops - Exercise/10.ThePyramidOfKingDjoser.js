function thePyramidOfKIngDjoser(width, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;

  let totalStone = 0;
  let totalMarble = 0;
  let totalLapis = 0;
  let totalGold = 0;

  let stepsCounter = 0;

  let numOfLevels = Math.ceil(width / 2);

  for (let side = width; side >= 1; side -= 2) {
    stepsCounter++;

    if (numOfLevels === stepsCounter) {
      totalGold = side * side * increment;
      continue;
    }

    if (stepsCounter % 5 === 0) {
      stone = (side - 2) * (side - 2) * increment;
      lapis = side * side * increment - stone;
      totalStone += stone;
      totalLapis += lapis;
      continue;
    }

    stone = (side - 2) * (side - 2) * increment;
    marble = side * side * increment - stone;
    totalStone += stone;
    totalMarble += marble;
  }

  let pyramidHeight = numOfLevels * increment;

  console.log(`Stone required: ${Math.ceil(totalStone)}`);
  console.log(`Marble required: ${Math.ceil(totalMarble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
  console.log(`Gold required: ${Math.ceil(totalGold)}`);
  console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}

thePyramidOfKIngDjoser(23, 0.5);
