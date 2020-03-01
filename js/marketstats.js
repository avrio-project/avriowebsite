/* This file gets the market stats of avrio (eg price, volume, ect)
when ading a new exchange:
* Create function get-<exchangename>() (eg get-avex())
* The function should return an array in the following format:
    [exchangename, pricebtc, volume24hr, low, high, chart-url(iframe), priceofbtc]
* add your exchange to getMarketStats:
    eg add get-avex() to under existing markets
 */
function getAvex() {
    let result = fetch("https://avex.exchange/publicdata/price/?primary=aio&secondary=btc");
    let res = JSON.parse(result);
    let btcrawprice = fetch("https://blockchain.info/ticker");
    let btcjsonprice = JSON.parse(btcrawprice)
    let btcprice = btcjsonprice.USD.buy;
    let array = ["avex", res.price, res.volume_primary, res.low, res.high, '<iframe id="avex-chart" src=\'https://avex.exchange/chart/?primary=aio&secondary=btc" style="height:380px;width:100%\'></iframe>', btcprice];
    return array;
}
window.onload(getMarketStats());
function getMarketStats() {
  let ms = getAvex();
  document.getElementById("pricebtc").inerHtml= ms[1];
  document.getElementById("pricegbp").inerHtml= ms[1] * ms[6];
  document.getElementById("vol").inerHtml= ms[2];
  document.getElementById("graph").inerHtml= ms[5];
}
