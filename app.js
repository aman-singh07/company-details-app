var express = require("express");
const axios = require('axios');
const port = process.env.PORT || 3000
var app = express();
app.use(express.urlencoded({limit: '50mb'}));

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
    let url = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json';//+req.params.id;
    let stockData = await getStocksDetails(url);
    //result.push();
    res.send(stockData.data)
});
app.listen(port,() => {
  console.log(`Server running at port `+port);
}); 