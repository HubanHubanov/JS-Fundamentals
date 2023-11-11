function extractFile(input) {

  let lastIndexBeforeFile = input.lastIndexOf("\\");
  let lastIndexBeforeExtension = input.lastIndexOf(".");

  let fileName = input.substring(
    lastIndexBeforeFile + 1,
    lastIndexBeforeExtension
  );

  let extensionName = input.substring(lastIndexBeforeExtension + 1);

  console.log(`File name: ${fileName}`);

  console.log(`File extension: ${extensionName}`);

}

extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");

extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
