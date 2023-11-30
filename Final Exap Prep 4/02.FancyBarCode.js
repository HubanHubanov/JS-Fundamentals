function fancyBarCode(input) {
  let numBarcodes = Number(input.shift());

  let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
  let digitPattern = /[0-9]/g;

  for (let i = 0; i < input.length; i++) {
    let currBarcode = input[i];

    let productGroup = "";

    let match = pattern.exec(currBarcode);

    if (!match) {
      console.log("Invalid barcode");
      continue;
    }
    let word = match[0];

    let digits = word.match(digitPattern);

    if (digits === null) {
      productGroup = "00";
    } else {
      for (let num of digits) {
        productGroup += num;
      }
    }

    console.log(`Product group: ${productGroup}`);
  }
}

fancyBarCode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log("--------------------");
fancyBarCode([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
