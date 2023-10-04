function oddOccurrences(input) {
  let obj = {};

  let arr = input.split(" ").map((X) => X.toLowerCase());

  for (let el of arr) {
    if (!obj.hasOwnProperty(el)) {
      obj[el] = 1;
    } else {
      obj[el] = obj[el] + 1;
    }
  }

  let entries = Object.entries(obj);

  let res = "";
  for (let [el, num] of entries) {
    if (num % 2 !== 0) {
      res += el + " ";
    }
  }
  console.log(res);
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
