const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("/names", (req, res) => {
  res.send("Modhwadiya Nilesh");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001.....");
});
