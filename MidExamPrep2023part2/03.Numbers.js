function numbers(str) {
  let arr = str.split(" ").map(Number);

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = sum / arr.length;

  arr.sort((a, b) => b - a);

  let resArr = [];

  for (let i = 0; i < 5; i++) {
    if (arr[i] > avg) {
      resArr.push(arr[i]);
    }
  }

  if (resArr.length > 0) {
    console.log(resArr.join(" "));
  } else {
    console.log("No");
  }
}

numbers("10 20 30 40 50");

numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");

numbers("1");

numbers("-1 -2 -3 -4 -5 -6");
