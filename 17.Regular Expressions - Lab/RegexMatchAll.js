function regex() {

  const regexp = /t(e)(st(\d?))/g;

  const str = "test1test2test";

  const array = [...str.matchAll(regexp)]

  console.log(array[2]);
}

regex();
