const { error } = require("console");
const https = require("https");

const info = JSON.stringify({
  letter: `The details of this transaction shouldn't leave this convo`,
});

const options = {
  method: "GET",
  hostname: "088b1f2f-6b01-44c5-8a25-511af46d04d8.mock.pstmn.io",
  path: "//",
  headers: {
    "content-type": "application/json",
    "content-length": info.length,
  },
};

const req = https.request(options, (res) => {
  console.log(`response:${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.write(info);

req.end();
