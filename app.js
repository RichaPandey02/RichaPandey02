const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("hello API!!!");
});
app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});
