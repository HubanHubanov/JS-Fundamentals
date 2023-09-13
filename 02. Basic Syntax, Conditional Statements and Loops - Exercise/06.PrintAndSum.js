function printAndSum(startNumber, endNumber) {
  let buff = "";
  let sum = 0;

  for (let i = startNumber; i <= endNumber; i++) {
    buff += i + " ";
    sum += i;
  }

  console.log(buff);
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
