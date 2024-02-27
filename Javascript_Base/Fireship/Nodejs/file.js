const { readFile, readFileSync } = require("fs");

// const txt = readFileSync("text.txt", "utf-8");

// console.log(txt);

// console.log("Asap");

readFile("text.txt", "utf-8", (err, txt) => {
    console.log(txt);
  });
  
  console.log("Asap");
  