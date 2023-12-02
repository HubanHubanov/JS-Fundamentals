function lettersChangeNumbers(input) {
  let pattern = /\s+/g

  let inputArr = input.split(pattern);

  let letters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  let sum = 0;
  for (let el of inputArr) {
    let firstCh = el.substring(0, 1);
    let lastCh = el.substring(el.length - 1);
    let number = Number(el.substring(1, el.length - 1));

    if (firstCh.charCodeAt() >= 65 && firstCh.charCodeAt() <= 90) {
      number = number / letters[firstCh];
    } else if (firstCh.charCodeAt() >= 97 && firstCh.charCodeAt() <= 122) {
      number = number * letters[firstCh];
    }

    if (lastCh.charCodeAt() >= 65 && lastCh.charCodeAt() <= 90) {
      number = number - letters[lastCh];
    } else if (lastCh.charCodeAt() >= 97 && lastCh.charCodeAt() <= 122) {
      number = number + letters[lastCh];
    }

    sum += number;
  }
  console.log(sum.toFixed(2));
}

lettersChangeNumbers("A12b    s17G");

lettersChangeNumbers("P34562Z q2576f H456z");

lettersChangeNumbers("a1A");
