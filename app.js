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


app.get("/stock-details/:id", async (req, res, next) => {
    let url = 'https://api.bseindia.com/BseIndiaAPI/api/ComHeader/w?quotetype=EQ&scripcode='+req.params.id;
    let stockData = await getStocksDetails(url);
    res.send(stockData)
});
app.listen(port,() => {
  console.log(`Server running at port `+port);
}); 