var express = require("express");
const port = process.env.PORT || 3000
var app = express();
app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });
app.listen(port,() => {
  console.log(`Server running at port `+port);
});