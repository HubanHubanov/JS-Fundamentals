function pirates(data) {
    let input = data.shift();
    let includes = false;
  
    let arr = [];
  
    while (input !== "Sail") {
      let [name, population, gold] = input.split("||");
      population = Number(population);
      gold = Number(gold);
  
      let found = arr.find((x) => x.name === name);
  
      if (found) {
        found.population += population;
        found.gold += gold;
      } else {
        let obj = {
          name,
          population,
          gold,
        };
        arr.push(obj);
      }
  
      input = data.shift();
    }
  
    let command = data.shift();
  
    while (command !== "End") {
      let tokens = command.split("=>");
      let currCommand = tokens.shift();
  
      if (currCommand === "Plunder") {
        let town = tokens[0];
        let people = Number(tokens[1]);
        let gold = Number(tokens[2]);
  
        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );
  
        let plunderCity = arr.find((x) => x.name === town);
  
        if (plunderCity) {
          plunderCity.population -= people;
          plunderCity.gold -= gold;
        }
  
        if (plunderCity.population === 0 || plunderCity.gold === 0) {
          console.log(`${plunderCity.name} has been wiped off the map!`);
          let found = arr.find((y) => y === plunderCity);
  
          arr = arr.filter((z) => z !== found);
        }
      } else if (currCommand === "Prosper") {
        town = tokens[0];
        gold = Number(tokens[1]);
  
        if (gold < 0) {
          console.log("Gold added cannot be a negative number!");
        } else {
          for (let el of arr) {
            if (el.name === town) {
              el.gold += gold;
              console.log(
                `${gold} gold added to the city treasury. ${town} now has ${el.gold} gold.`
              );
            }
          }
        }
      }
  
      command = data.shift();
    }
  
    if (arr.length === 0) {
      console.log(
        "Ahoy, Captain! All targets have been plundered and destroyed!"
      );
    } else {
      console.log(
        `Ahoy, Captain! There are ${arr.length} wealthy settlements to go to:`
      );
      for (let el of arr) {
        console.log(
          `${el.name} -> Population: ${el.population} citizens, Gold: ${el.gold} kg`
        );
      }
    }
  }
  
  pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End",
  ]);
  