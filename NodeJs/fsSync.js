const fs = require("fs");
let content = "This is some random text";
try {
  result = fs.readFileSync("text.txt", "utf-8");
  console.log(result);
} catch (err) {
  console.error(err);
}
try {
  fs.writeFileSync("written.txt", content);
} catch (err) {
  console.error(err);
}
