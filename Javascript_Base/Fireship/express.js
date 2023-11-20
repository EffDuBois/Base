const express = require("express");
// const { readFile } = require("fs");

// const app = express();

// app.get("/", (request, response) => {
//   readFile("./home.html", "utf-8", (err, html) => {
//     if (err) {
//       response.status(500).send("internal server error");
//     }
//     response.send(html);
//   });
// });

const {readFile} = require('fs').promises;

const app = express();

app.get("/", async (request,response) => {
    response.send(await readFile("./home.html","utf-8"))
})

app.listen(process.env.PORT || 3000, () =>
  console.log(`app availabe on http://localhost:3000`)
);
