function printHeader() {
    console.log('~~~- {@} -~~~');
    console.log('~- Certificate -~');
    console.log('~~~- ~---~ -~~~');
   }
   printHeader(); 


   function printName(nameArr) {
    console.log(nameArr[0] + ' ' + nameArr[1]);
   }
   printName(['John', 'Smith'])


   function pass(grade) {
    return grade >= 3;
   }
console.log(pass(5))