function guineaPig(arr) {
  let food = Number(arr.shift());
  let hay = Number(arr.shift());
  let cover = Number(arr.shift());
  let weight = Number(arr.shift());

  for (let i = 1; i <= 30; i++) {
    food -= 0.3;
    if (i % 2 === 0) {
      hay -= 0.05 * food;
    }
    if (i % 3 === 0) {
      cover -= (1 / 3) * weight;
    }
  }

  if (food.toFixed(2) > 0 && hay.toFixed(2) > 0 && cover.toFixed(2) > 0) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${food.toFixed(
        2
      )}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`
    );
  } else {
    console.log("Merry must go to the pet store!");
  }
}

guineaPig(["10", "5", "5.2", "1"]);

guineaPig(["1", "1.5", "3", "1.5"]);

guineaPig(["9", "5", "5.2", "1"]);
