const { readFile } = require("fs").promises;

async function displayTxt() {
  const txt = await readFile("./text.txt", "utf-8");

  console.log(txt);
}
displayTxt();
 