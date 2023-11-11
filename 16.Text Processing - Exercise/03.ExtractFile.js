function extractFile(input) {
  let inputArr = input.split("\\");

  let file = inputArr[inputArr.length - 1];

  let fileArr = file.split(".");
  let extension = fileArr.pop();
  let fileName = fileArr.join(".");

  console.log(`File name: ${fileName}`);

  console.log(`File extension: ${extension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");

extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
