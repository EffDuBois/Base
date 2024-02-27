const express = require("express");
const errorhandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorhandler);

app.listen(port, () => {
  console.log(`Server on port http://localhost:${port}`);
});
