var express = require("express");
const axios = require('axios');
const port = process.env.PORT || 3000
var app = express();

function getStocksDetails(url){
    return new Promise((resolve,reject) => {
         try {
             axios.get(url)
             .then(response => {
                 var codedata = response.data;
                 resolve(codedata)
             })
         } catch (error) {
             reject(error)
         }
    })
 }


app.get("/stock-details", async (req, res, next) => {
    //let result = [];
    let url = 'https://api.bseindia.com/BseIndiaAPI/api/IndexMovers/w';//+req.params.id;
    let stockData = await getStocksDetails(url);
    //result.push();
    res.send(stockData.Table)
});
app.listen(port,() => {
  console.log(`Server running at port `+port);
}); 