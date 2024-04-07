const fs = require("node:fs/promises");

async function readFile() {
  try {
    const result = await fs.readFile("text.txt", "utf-8");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
readFile();
