const https = require("https");

const options = {
  hostname: "088b1f2f-6b01-44c5-8a25-511af46d04d8.mock.pstmn.io",
  path: "//",
  method: "GET",
  headers: {},
};

const req = https.request(options, (res) => {
  console.log(`statuscode: ${res.statusCode}`);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
