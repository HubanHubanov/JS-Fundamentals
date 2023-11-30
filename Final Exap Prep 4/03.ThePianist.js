function thePianist(input) {
  let n = Number(input.shift());

  let collection = {};

  for (let i = 0; i < n; i++) {
    let currPieceInfo = input.shift();
    let [piece, composer, key] = currPieceInfo.split("|");

    collection[piece] = {
      composer,
      key,
    };
  }

  let currCommand = input.shift();

  while (currCommand !== "Stop") {
    let tokens = currCommand.split("|");
    let command = tokens.shift();
    let piece = tokens.shift();

    if (command === "Add") {
      let composer = tokens[0];
      let key = tokens[1];
      if (collection.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
        collection[piece] = {
          composer,
          key,
        };
      }
    } else if (command === "Remove") {
      if (collection.hasOwnProperty(piece)) {
        delete collection[piece];

        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (command === "ChangeKey") {
      let newKey = tokens[0];
      if (collection.hasOwnProperty(piece)) {
        collection[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }

    currCommand = input.shift();
  }

  for (let piece in collection) {
    console.log(
      `${piece} -> Composer: ${collection[piece].composer}, Key: ${collection[piece].key}`
    );
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
// console.log("--------------------------------");
// thePianist([
//   "4",
//   "Eine kleine Nachtmusik|Mozart|G Major",
//   "La Campanella|Liszt|G# Minor",
//   "The Marriage of Figaro|Mozart|G Major",
//   "Hungarian Dance No.5|Brahms|G Minor",
//   "Add|Spring|Vivaldi|E Major",
//   "Remove|The Marriage of Figaro",
//   "Remove|Turkish March",
//   "ChangeKey|Spring|C Major",
//   "Add|Nocturne|Chopin|C# Minor",
//   "Stop",
// ]);
