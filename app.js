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


app.get("/stocks-watch", async (req, res, next) => {
    let url = 'https://api.bseindia.com/BseIndiaAPI/api/GetStkCurrMain/w?flag=Equity&ddlVal1=Index&ddlVal2=S%26P%20BSE%20SENSEX&m=0&pgN=1';//+req.params.id;
    let stockData = await getStocksDetails(url);
    res.send(stockData)
});
app.listen(port,() => {
  console.log(`Server running at port `+port);
}); 